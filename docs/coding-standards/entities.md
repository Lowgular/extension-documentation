---
sidebar_position: 2
---

# Entities

Entity is a fundamental part of `coding-standards.json`. In `entities` key you can define entities.

These will appear in the `Create New...` list.

Default config:

```
{
  "entities": {
    "component": {
      "id": "component",
      "type": "ANGULAR_COMPONENT",
      "suffix": "Component",
      "folder": "components/$name$",
      "insideOf": "App",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "model": {
      "id": "model",
      "type": "DATA_STRUCTURE",
      "suffix": "Model",
      "folder": "models",
      "insideOf": "App"
    },
    "service": {
      "id": "service",
      "type": "SERVICE",
      "suffix": "Service",
      "folder": "services",
      "insideOf": "App"
    }
  }
}

```

### Id

**Optional** property.

**Default:** key of the entity, eg. model, service.

This is how Lowgular distinguishes between Entities configured.

The entities key is an object and the key of this object **must** be the same as **id** inside the config.

### Suffix

**Optional** property.

**Default:** camelcase id of the entity, eg: Model, DtoPort.

Suffix is uses to append a suffix to entitiy names as well as to created files.

E.g. If you want to create a service with a suffix of `State` and name `Product`, it will create a class called `ProductState` inside of file `product.state.ts`

### Folder

**Optional** property.

**Default:** plural id of the entity, eg: models, services.

You may specify where you want to generate your entities.

The folder path is taken from a root folder of your project, so it does not matter on which exact folder you click, it will always start from the project root.

E.G. if I have an `App` project inside of `src/app`, and a folder setup of `services` then it will create my files inside of `src/app/services` folder.

Additionally you may use context values for example when you create an entity, you need to give it a name. This will allow you to use variable inside of your folder path.

E.G. If I call give an entity name: `TestMe` and a folder setup: `entities/$name$/something`, then it will dasherize the entity name and replace a token `$name$` with the value.

Therefore it will create entity files inside of `entities/test-me/something`.

### Type

**Required** property.

**Default:** none.

There are a few types that are used. Play around with them and be creative. Your imagination is the only limit!

#### ANGULAR_COMPONENT

This will create a class with @Component decorator and a [component module](/docs/coding-standards/modules#single-angular-modules) inside of `component-name.component-module.ts` in a same folder.

##### Config

Angular component can take additional config.
It is designed so you can distinguish between different types of components.

It is quite common to create `Smart Components` and `Presentation Components` differently.

It is also quite common to create a routable components e.g. `Pages` differently too.

The properties and their allowed values are:

`stylesExtension`: `none` or `scss`
`viewEncapsulation`: `None` or `Default` (Mind the pascal case here!)
`selector`: `generated` (it will dasherize a component name and prefix it with prefix value from angular configuration) or `none` (will not create a selector - especially useful for routable components)
`changeDetectionStrategy`: `OnPush` or `Default` (mind the pascal case here!)

#### ANGULAR_SERVICE

This will create a class with @Injectable decorator and a [service module](/docs/coding-standards/modules#single-angular-modules) inside of `service-name.$SUFFIX$-module.ts` in a same folder.

#### ANGULAR_DIRECTIVE

This will create a class with @Directive decorator and a [directive module](/docs/coding-standards/modules#single-angular-modules) inside of `directive-name.$SUFFIX$-module.ts` in a same folder.

#### ANGULAR_RESOLVER

This will create a class with @Injectable decorator and a [resolver module](/docs/coding-standards/modules#single-angular-modules) inside of `resolver-name.$SUFFIX$-module.ts` in a same folder.

It will implement Resolve<void\> interface

#### ANGULAR_GUARD

This will create a class with @Injectable decorator and a [guard module](/docs/coding-standards/modules#single-angular-modules) inside of `service-name.$SUFFIX$-module.ts` in a same folder.

It will implement CanActivate interface

#### DATA_STRUCTURE

This will create an interface with readonly properties.

Data Structure is designed to transfer data and not to contain any logic, so do not create any methods on it.

There will be no module created since it is an interface.

#### OBJECT

This will create a class with constructor readonly public parameters.

It is similar to the Data Structure, however the difference is encapsulation.

It means that you should expose some properties, and all the setters or a state changing methods should be void in order to prevent state changes from the outside.

They may change state or contain specific logic, but it should be done inside of the class via void methods.

Similarily to Data Structures, Objects can be used to transfer data between the layers.

There will be no module createdsince it does not plug into Angular Dependency Injection system.

#### ABSTRACTION

This will create an interface and an Injection Token.

The abstraction is used to de-couple the layers and support Dependency Inversion Principle form SOLID.

It should contain at least 1 method.

There will be no module created because it is an interface, however it will be used by a connected [service module](/docs/coding-standards/modules#single-angular-modules) to provide injection tokens in implementing service class.

### Inside of

**Optional** property.

**Default:** App

Entities are always created in projects. By default Angular CLI provides you with a single app, however it does not have to be this way, you may create [Libraries](/docs/features/library) which is a specific project type.

By default Lowgular will create all entities inside of **App**, however you may alter the configuration and use **Lib** instead.
