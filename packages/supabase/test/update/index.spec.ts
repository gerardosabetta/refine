import { dataProvider } from "../../src";
import supabaseClient from "../supabaseClient";
import "./index.mock";

describe("update", () => {
    it("correct response", async () => {
        const { data } = await dataProvider(supabaseClient).update(
            "posts",
            "2",
            {
                title: "Hello World!!",
            },
        );

        expect(data["title"]).toBe("Hello World!!");
    });
});