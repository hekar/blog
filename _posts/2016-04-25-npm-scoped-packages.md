---
title: "Scoped Packages with npm-link"
date: "2016-04-25"
category: node
tags: nodejs
---

In the past few months, I have noticed that `npm link` and scoped packages have gone underused by my colleagues.
The `npm link` command is essential for quick development. And if you're building private packages inside an organization, scoped packages can make managing and installing packages much simpler.

Before we can do anything, we need a scoped package. Fortunately, it's as simple as naming the package in the following format: `@<scope>/<package>`.

---

For example, in `package.json`:

```js
{
  "name": "@mycompany/fast-lib"
  // ...
}
```

Sometimes you want to make changes to a dependency while working on an application. This means you have both repositories on your local machine and are making modifications. You could manually sync them using `npm install`, but there's an easier way. Create a symbolic link using `npm link`.

The synopsis from the `npm` documentation states that the npm link command only takes a single argument. The name of the [scoped] package.

```
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln
```

Using `npm link` is easier than it seems. You do not need to chdir outside your project's folder.

To link a scoped package to a project:

```
npm link <path-to-dependency> @scope/<package>[@version]
```

Same goes for non-scoped packages:

```
npm link <path-to-dependency> <package>[@version]
```

`@version` is optional.

Example:

```
npm link ../fast-lib @mycompany/fast-lib@1.0.0
```

To validate that it worked, check the folder in `node_modules/` to make sure it's a symlink and points to the correct folder.

```
ls -l node_modules/@scope/<package>
# or
ls -l node_modules/<package>
```

You should see a reference to the folder containing the project.

To use a private npm registry for your scoped packages, you need to setup an `.npmrc`. This does not apply if you're using [npmjs.com](https://www.npmjs.com/npm/private-packages). See their [documentation](https://docs.npmjs.com/orgs/what-are-orgs) for details.

Getting authenticated with your respective npm registry is different depending on where your packages are hosted. The configuration of the `.npmrc` is always the same though.

```
@<scope>:registry=https://<your-npm-registry>/
//<your-npm-registry>/:_password=<password-base-64>
//<your-npm-registry>/:username=<username>
//<your-npm-registry>/:email=<email>
//<your-npm-registry>/:always-auth=true
```

The `.npmrc` is read from the following locations in the order:

1. per-project config file (/path/to/my/project/.npmrc)
1. per-user config file (~/.npmrc)
1. global config file ($PREFIX/etc/npmrc)
1. npm builtin config file (/path/to/npm/npmrc)

That's all you need to know about `npm link` and a primer on [scoped packages](https://docs.npmjs.com/misc/scope).
