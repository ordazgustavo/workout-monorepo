# Workout app monorepo

The monorepo is handled with yarn workspaces

The web app is built with [react-native-web](https://github.com/necolas/react-native-web) and the mobile apps with [react-native](https://github.com/facebook/react-native)
using a common package in order to share code as much as possible.

## Development

1. You'll need to have yarn installed:

```shell
npm i -g yarn
```

2. Then install a package called [`wml`](https://github.com/wix/wml) which is used
   to manage symlinks in a `react-native` project

```shell
npm i -g wml
```

3. Run `yarn` at the root of the project to install the packages

4. Run this command to create the symlink with wml at the project root:

```shell
wml add package/common package/app/@workout/common
```

And then run to watch for changes on the common package:

```shell
wml start
```
