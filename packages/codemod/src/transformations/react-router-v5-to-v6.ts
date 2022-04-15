import {
    API,
    JSCodeshift,
    Collection,
    FileInfo,
    ImportSpecifier,
    JSXExpressionContainer,
    ObjectExpression,
    ObjectProperty,
    Identifier,
} from "jscodeshift";
import fs from "fs";
import path from "path";
import { install, remove } from "../helpers";
import checkPackageLock from "../helpers/checkPackageLock";

export const parser = "tsx";

function updateReactRouterImports(j: JSCodeshift, root: Collection<any>) {
    const refineReactRouterv5Imports = root.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine-react-router",
        },
    });
    console.log(
        "refineReactRouterv5Imports",
        refineReactRouterv5Imports.length,
    );

    if (refineReactRouterv5Imports.length > 0) {
        /*  refineReactRouterv5Imports.replaceWith((path) => {
            path.node.source.value = "@pankod/refine-react-router-v6";
            return path.node;
        }); */

        const refineElement = root.find(j.JSXElement, {
            openingElement: {
                name: {
                    name: "Refine",
                },
            },
        });

        if (refineElement.length > 0) {
            const routerProviderJSXAttribute = root.find(j.JSXAttribute, {
                name: {
                    name: "routerProvider",
                },
            });

            console.log(
                "routerProviderJSXAttribute",
                routerProviderJSXAttribute.length,
            );

            const routerProviderRoutesProperty = root.find(j.Identifier, {
                name: "routes",
            });

            routerProviderRoutesProperty.forEach((path) => {
                console.log("___", path);
            });
        }
    } else {
        console.log(
            "WARNING: A refine react-router-v6 package from @pankod/refine-react-router-v6 is already imported. This tool will not make any migration for refine react-router (v5).",
        );
        return;
    }
}

export async function postTransform(files: any, flags: any) {
    return;
    const rootDir = path.join(process.cwd(), files[0]);
    const packageJsonPath = path.join(rootDir, "package.json");
    const useYarn = checkPackageLock(rootDir) === "yarn.lock";
    let packageJsonData;

    try {
        packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    } catch (err) {
        console.error(
            `Error: failed to load package.json from ${packageJsonPath}, ensure provided directory is root.`,
        );
    }

    const dependenciesToInstall: Array<{
        name: string;
        version: string;
    }> = [
        {
            name: "@pankod/refine-react-router-v6",
            version: "3.x.x",
        },
    ];

    if (!flags.dry) {
        await install(
            rootDir,
            dependenciesToInstall.map((dep) => `${dep.name}@${dep.version}`),
            {
                useYarn,
                isOnline: true,
            },
        );

        await remove(rootDir, ["@pankod/refine-react-router"], {
            useYarn,
        });
    }
}

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    const refineReactRouterv5Imports = source.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine-react-router",
        },
    });

    if (refineReactRouterv5Imports.length === 0) {
        return;
    }

    updateReactRouterImports(j, source);

    return source.toSource();
}
