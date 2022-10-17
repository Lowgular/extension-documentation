---
sidebar_position: 6
---

# Worskpace

By default the plugin will try to resolve your base `typescript configuration` file and your `workspace configuration` file.

Default configuration looks like this:

```
{
  "workspace": {
    "workspaceConfig": "angular.json",
    "workspaceTsConfig": "tsconfig.json",
    "libsFolder": "projects",
  }
}
```

## Angular CLI setup

Default config fits perfectly with Angular CLI.

## Nx Setup

In case that Lowgular does not find the files specified in a default config, it will attempt to look for common setup with NX.

For the `typescript configuration` it will fall back to `tsconfig.base.json`

For the `workspace configuration` it will fall back to `worskpace.json`

_IMPORTANT_:
it will use `projects` folder to create the libraries, you might want to modify your configuration to use `libs` folder instead.

## Custom setup

In case that you get an error, then you can configure your own workspace setup.

You can configure your workspace settings in `coding-standards.json` file, all you have to do is to add `workspace` key and the config exactly like the one above.
