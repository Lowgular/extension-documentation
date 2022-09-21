---
sidebar_position: 3
---

# Entity Relations

You can configure relationships between Entities. You can do it in `coding-standards.json` under `entityRelations` key.

Default Config:

```
{
  "entityRelations": {
    "component": {
      "model": "PROPERTY",
      "service": "CONSTRUCTOR"
    },
    "service": {
      "httpClient": "CONSTRUCTOR",
      "model": "PARAMETER_AND_RETURN"
    }
  }
}

```

The way it works is that each entity can be connected to another entity in a single way.

This is designed like this so you can avoid typos / mistakes and common architectural flaws like **circular dependencies**, **spaghetti code**, etc.

The key of a config is the `relating entity id` and the value is `the relationship config`.

The relationship config is an object where they key is `the related entity id` and value is `relationship type`

## Entity Relation Types

### HTML

This will allow you to [Add Component](docs/features/add-component) inside of HTML.

It will also manage all the module imports between the components, which is super cool!

### CONSTRUCTOR

This will allow you to [inject](/docs/features/inject) an entity in the Constructor

### PROPERTY

`Coming soon...`

### RETURN

This will allow you to get a list of related entities when you [Add method](/docs/features/method#add-method)

### PARAMETER

`Coming soon...`

### PARAMETER_AND_RETURN

This is a combination of PARAMETER and RETURN types.
Sometimes you want to relate a Data Structure or an Object in both ways.

### IMPLEMENTS

This allows you to related to `Abstraction` and [implement](/docs/features/Implement) it
