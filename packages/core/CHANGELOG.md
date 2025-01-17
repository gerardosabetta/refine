# @pankod/refine-core

## 3.32.0

### Minor Changes

-   Add `useMenu` hook to `@pankod/refine-core`

### Patch Changes

-   Add custom route support to `defaultOpenKeys` in `useMenu`

*   Handle the `undefined` case at audit-log logger in data hooks.

-   Remove dashboard item in `useMenu` hook

## 3.31.0

### Minor Changes

-   [`498c425a0e`](https://github.com/pankod/refine/commit/498c425a0e069b6b972a344ff32af46852306c71) Thanks [@omeraplak](https://github.com/omeraplak)! - Add `useMenu` hook to `@pankod/refine-core`

### Patch Changes

-   [`498c425a0e`](https://github.com/pankod/refine/commit/498c425a0e069b6b972a344ff32af46852306c71) Thanks [@omeraplak](https://github.com/omeraplak)! - Add custom route support to `defaultOpenKeys` in `useMenu`

*   [`498c425a0e`](https://github.com/pankod/refine/commit/498c425a0e069b6b972a344ff32af46852306c71) Thanks [@omeraplak](https://github.com/omeraplak)! - Handle the `undefined` case at audit-log logger in data hooks.

-   [#2009](https://github.com/pankod/refine/pull/2009) [`5b893a9bff`](https://github.com/pankod/refine/commit/5b893a9bff707d90b0f898a52d46a7154108b0a0) Thanks [@aliemir](https://github.com/aliemir)! - Remove dashboard item in `useMenu` hook

## 3.30.0

### Minor Changes

-   Add `useMenu` hook to `@pankod/refine-core`

### Patch Changes

-   Add custom route support to `defaultOpenKeys` in `useMenu`

*   Handle the `undefined` case at audit-log logger in data hooks.

## 3.29.2

### Patch Changes

-   Fix hook-inside-hook call in `notificationProvider` setup at `<Refine/>`

## 3.29.1

### Patch Changes

-   [#1973](https://github.com/pankod/refine/pull/1973) [`206540971b`](https://github.com/pankod/refine/commit/206540971b12f3c63765aecb8aec6d506733a569) Thanks [@aliemir](https://github.com/aliemir)! - Fix hook-inside-hook call in `notificationProvider` setup at `<Refine/>`

## 3.29.0

### Minor Changes

-   Updated `notificationProvider` prop in the `Refine` wrapper component to be able to lazily initialized.

## 3.28.0

### Minor Changes

-   Updated `notificationProvider` prop in the `Refine` wrapper component to be able to lazily initialized.

## 3.27.0

### Minor Changes

-   Updated `notificationProvider` prop in the `Refine` wrapper component to be able to lazily initialized.

## 3.26.0

### Minor Changes

-   [#1896](https://github.com/pankod/refine/pull/1896) [`2ba2a96fd2`](https://github.com/pankod/refine/commit/2ba2a96fd24aa733c355ac9ef4c99b7d48115746) Thanks [@aliemir](https://github.com/aliemir)! - Updated `notificationProvider` prop in the `Refine` wrapper component to be able to lazily initialized.

## 3.23.2

### Patch Changes

-   [#1873](https://github.com/pankod/refine/pull/1873) [`2deb19babf`](https://github.com/pankod/refine/commit/2deb19babfc6db5b00b111ec29aa5ece4c371bbc) Thanks [@aliemir](https://github.com/aliemir)! - Removed dummy default values from internal contexts.
    Updated contexts:

    -   Auth
    -   Access Control
    -   Notification
    -   Translation (i18n)
    -   unsavedWarn

    **BREAKING:** `useGetLocale` hook now can return `undefined` instead of a fallback value of `en` in cases of `i18nProvider` being `undefined`.

## 3.23.1

### Patch Changes

-   [`3281378b11`](https://github.com/pankod/refine/commit/3281378b119c698be3ae4ecb3866b40b883494d8) Thanks [@rassie](https://github.com/rassie)! - Fix: Don't "humanize" labels in breadcrumbs

## 3.23.0

### Minor Changes

-   [#1843](https://github.com/pankod/refine/pull/1843) [`31850119e0`](https://github.com/pankod/refine/commit/31850119e069b93f0b5146b039a86e736164383e) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Add `useBreadcrumb` hook and `Breadrumb` component for `@pankod/refine-antd` package
