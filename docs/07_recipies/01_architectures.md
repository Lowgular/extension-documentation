---
sidebar_position: 1
---

# Architectures

## CMS: Component Model Service

It is an architecture that is loaded by default.

The dependency graph:

![CMS Diagram](./img/cms-architecture.png)

`coding-standards.json`:

```
{
  "entityRelations": {
    "component": {
      "model": ["PROPERTY"],
      "service": ["CONSTRUCTOR"],
      "router": ["CONSTRUCTOR"],
      "activatedRoute": ["CONSTRUCTOR"]
    },
    "service": {
      "httpClient": ["CONSTRUCTOR"],
      "model": ["PARAMETER", "RETURN"]
    }
  },
  "external": {
    "httpClient": {
      "type": "HttpClient",
      "module": "@angular/common/http"
    },
    "router": {
      "type": "Router",
      "module": "@angular/router"
    },
    "activatedRoute": {
      "type": "ActivatedRoute",
      "module": "@angular/router"
    }
  },
  "entities": {
    "component": {
      "type": "ANGULAR_COMPONENT",
      "folder": "components/$name$",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "model": {
      "type": "DATA_STRUCTURE"
    },
    "service": {
      "type": "ANGULAR_SERVICE"
    }
  }
}

```

<!-- ## CMRS: Component Model Repository Service

Following the dependency inversion principle from SOLID.

One can add an abstraction between a `Component` and a `Service`, let's call it a `Repository`

![CMRS Diagram](./img/cmrs-architecture.png)

`coding-standards.json`:

```
{
  "entityRelations": {
    "component": {
      "model": ["PROPERTY"],
      "repository": ["CONSTRUCTOR"]
    },
    "repository": {
      "model": ["PARAMETER", "RETURN"]
    },
    "service": {
      "httpClient": ["CONSTRUCTOR"],
      "model": ["PARAMETER", "RETURN"],
      "repository": ["IMPLEMENTS"]
    }
  },
  "external": {
    "httpClient": {
      "id": "httpClient",
      "type": "HttpClient",
      "module": "@angular/common/http"
    }
  },
  "entities": {
    "component": {
      "type": "ANGULAR_COMPONENT",
      "folder": "components/$name$",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "model": {
      "type": "DATA_STRUCTURE"
    },
    "repository": {
      "type": "ABSTRACTION"
    },
    "service": {
      "type": "ANGULAR_SERVICE"
    }
  }
}

``` -->

## Basic State

Sometimes you want to create the application layer between your presentation and data layers.

This will allow you to solve reactivity issues as well as start having all the business logic and use cases in one place that can be reused for other components.

![State Diagram](./img/state-architecture.png)

`coding-standards.json`:

```
{
  "entityRelations": {
    "component": {
      "state": ["CONSTRUCTOR"],
      "model": ["PROPERTY"]
    },
    "state": {
      "service": ["CONSTRUCTOR"],
      "model": ["PARAMETER", "RETURN"]
    },
    "service": {
      "httpClient": ["CONSTRUCTOR"],
      "model": ["PARAMETER", "RETURN"]
    }
  },
  "external": {
    "httpClient": {
      "type": "HttpClient",
      "module": "@angular/common/http"
    }
  },
  "entities": {
    "component": {
      "type": "ANGULAR_COMPONENT",
      "folder": "components/$name$",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "model": {
      "type": "DATA_STRUCTURE"
    },
    "state": {
      "type": "ANGULAR_SERVICE"
    },
    "service": {
      "type": "ANGULAR_SERVICE"
    }
  }
}

```

## CQRS: Command Query Responsibility Segregation

Fancy something more advanced? Tired of a simple state management systems?

Maybe this could be a solution to your problems.

![CQRS Diagram](./img/cqrs-architecture.png)

`coding-standards.json`:

```
{
  "entityRelations": {
    "page": {
      "component": ["HTML"]
    },
    "component": {
      "queryHandler": ["CONSTRUCTOR"],
      "commandHandeler": ["CONSTRUCTOR"],
      "query": ["PROPERTY"],
      "command": ["PROPERTY"]
    },
    "queryHandler": {
      "eventStore": ["CONSTRUCTOR"],
      "query": ["RETURN"]
    },
    "commandHandeler": {
      "service": ["CONSTRUCTOR"],
      "eventStore": ["CONSTRUCTOR"],
      "command": ["PARAMETER"]
    },
    "service": {
      "httpClient": ["CONSTRUCTOR"],
      "response": ["RETURN"]
    }
  },
  "external": {
    "httpClient": {
      "type": "HttpClient",
      "module": "@angular/common/http"
    }
  },
  "entities": {
    "component": {
      "type": "ANGULAR_COMPONENT",
      "folder": "presentation/components/$name$",
      "insideOf": "Lib",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "query": {
      "type": "DATA_STRUCTURE",
      "folder": "application/query-handlers",
      "insideOf": "Lib"
    },
    "queryHandler": {
      "type": "ANGULAR_SERVICE",
      "folder": "application/query-handlers",
      "insideOf": "Lib"
    },
    "command": {
      "type": "DATA_STRUCTURE",
      "folder": "application/command-handlers",
      "insideOf": "Lib"
    },
    "commandHandler": {
      "type": "ANGULAR_SERVICE",
      "folder": "application/command-handlers",
      "insideOf": "Lib"
    },
    "eventStore": {
      "type": "ANGULAR_SERVICE",
      "folder": "infra/events",
      "insideOf": "Lib"
    },
    "service": {
      "type": "ANGULAR_SERVICE",
      "folder": "infra/services",
      "insideOf": "Lib"
    },
    "response": {
      "type": "DATA_STRUCTURE",
      "folder": "infra/responses",
      "insideOf": "Lib"
    },
    "page": {
      "type": "ANGULAR_COMPONENT",
      "insideOf": "App",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "none",
        "changeDetectionStrategy": "OnPush"
      }
    }
  }
}


```

<!-- ## Hexagonal Architecture

This is by far the most flexible, extensible and de-coupled architecture we have worked with.

You might not need it for simple cases, but it scales very well

![Hexagonal Diagram](./img/hexagonal-architecture.png)

`coding-standards.json`:

```
{
  "entityRelations": {
    "page": {
      "component": ["HTML"]
    },
    "component": {
      "commandPort": ["CONSTRUCTOR"],
      "queryPort": ["CONSTRUCTOR"],
      "command": ["PARAMETER"],
      "query": ["PROPERTY"]
    },
    "directive": {
      "commandPort": ["CONSTRUCTOR"],
      "queryPort": ["CONSTRUCTOR"],
      "command": ["PARAMETER"],
      "query": ["PROPERTY"]
    },
    "guard": {
      "queryPort": ["CONSTRUCTOR"],
      "query": ["PROPERTY"]
    },
    "resolver": {
      "commandPort": ["CONSTRUCTOR"],
      "command": ["PARAMETER"]
    },
    "eventHandler": {
      "commandPort": ["CONSTRUCTOR"],
      "command": ["PARAMETER"]
    },
    "commandPort": {
      "command": ["PARAMETER"]
    },
    "queryPort": {
      "query": ["RETURN"]
    },
    "state": {
      "command": ["PARAMETER"],
      "query": ["RETURN"],
      "commandPort": ["IMPLEMENTS"],
      "queryPort": ["IMPLEMENTS"],
      "contextPort": ["CONSTRUCTOR"],
      "dtoPort": ["CONSTRUCTOR"],
      "eventPort": ["CONSTRUCTOR"]
    },
    "contextPort": {
      "context": ["PARAMETER", "RETURN"]
    },
    "dtoPort": {
      "dto": ["PARAMETER", "RETURN"]
    },
    "eventPort": {
      "event": ["PARAMETER"]
    },
    "storage": {
      "contextPort": ["IMPLEMENTS"],
      "context": ["PARAMETER", "RETURN"]
    },
    "dataService": {
      "dtoPort": ["IMPLEMENTS"],
      "httpClient": ["CONSTRUCTOR"],
      "dto": ["PARAMETER", "RETURN"],
      "responseObject": ["PARAMETER"]
    },
    "eventDispatcher": {
      "eventPort": ["IMPLEMENTS"],
      "event": ["PARAMETER"]
    }
  },
  "external": {
    "httpClient": {
      "id": "httpClient",
      "type": "HttpClient",
      "module": "@angular/common/http"
    }
  },
  "entities": {
    "component": {
      "id": "component",
      "type": "ANGULAR_COMPONENT",
      "suffix": "Component",
      "folder": "adapters/primary/components/$name$",
      "insideOf": "Lib",
      "config": {
        "stylesExtension": "scss",
        "viewEncapsulation": "Emulated",
        "selector": "generated",
        "changeDetectionStrategy": "OnPush"
      }
    },
    "directive": {
      "id": "directive",
      "type": "ANGULAR_DIRECTIVE",
      "suffix": "Directive",
      "folder": "adapters/primary/directives/$name$",
      "insideOf": "Lib"
    },
    "resolver": {
      "id": "resolver",
      "type": "ANGULAR_RESOLVER",
      "suffix": "Resolver",
      "folder": "adapters/primary/resolvers/$name$",
      "insideOf": "Lib"
    },
    "guard": {
      "id": "guard",
      "type": "ANGULAR_GUARD",
      "suffix": "Guard",
      "folder": "adapters/primary/guards/$name$",
      "insideOf": "Lib"
    },
    "eventHandler": {
      "id": "eventHandler",
      "type": "ANGULAR_SERVICE",
      "suffix": "EventHandler",
      "folder": "adapters/primary/event-handlers/$name$",
      "insideOf": "Lib"
    },
    "command": {
      "id": "command",
      "type": "OBJECT",
      "suffix": "Command",
      "folder": "application/ports/primary/command",
      "insideOf": "Lib"
    },
    "commandPort": {
      "id": "commandPort",
      "type": "ABSTRACTION",
      "suffix": "CommandPort",
      "folder": "application/ports/primary/command",
      "insideOf": "Lib"
    },
    "query": {
      "id": "query",
      "type": "OBJECT",
      "suffix": "Query",
      "folder": "application/ports/primary/query",
      "insideOf": "Lib"
    },
    "queryPort": {
      "id": "queryPort",
      "type": "ABSTRACTION",
      "suffix": "QueryPort",
      "folder": "application/ports/primary/query",
      "insideOf": "Lib"
    },
    "state": {
      "id": "state",
      "type": "ANGULAR_SERVICE",
      "suffix": "State",
      "folder": "application/state",
      "insideOf": "Lib"
    },
    "event": {
      "id": "event",
      "type": "DATA_STRUCTURE",
      "suffix": "Event",
      "folder": "application/ports/secondary/event",
      "insideOf": "Lib"
    },
    "eventPort": {
      "id": "eventPort",
      "type": "ABSTRACTION",
      "suffix": "EventPort",
      "folder": "application/ports/secondary/event",
      "insideOf": "Lib"
    },
    "dto": {
      "id": "dto",
      "type": "DATA_STRUCTURE",
      "suffix": "DTO",
      "folder": "application/ports/secondary/dto",
      "insideOf": "Lib"
    },
    "dtoPort": {
      "id": "dtoPort",
      "type": "ABSTRACTION",
      "suffix": "DtoPort",
      "folder": "application/ports/secondary/dto",
      "insideOf": "Lib"
    },
    "context": {
      "id": "context",
      "type": "DATA_STRUCTURE",
      "suffix": "Context",
      "folder": "application/ports/secondary/context",
      "insideOf": "Lib"
    },
    "contextPort": {
      "id": "contextPort",
      "type": "ABSTRACTION",
      "suffix": "ContextPort",
      "folder": "application/ports/secondary/context",
      "insideOf": "Lib"
    },
    "dataService": {
      "id": "dataService",
      "type": "ANGULAR_SERVICE",
      "suffix": "Service",
      "folder": "adapters/secondary/services",
      "insideOf": "Lib"
    },
    "responseObject": {
      "id": "responseObject",
      "type": "DATA_STRUCTURE",
      "suffix": "Response",
      "folder": "adapters/secondary/services",
      "insideOf": "Lib"
    },
    "storage": {
      "id": "storage",
      "type": "ANGULAR_SERVICE",
      "suffix": "Storage",
      "folder": "adapters/secondary/storages",
      "insideOf": "Lib"
    },
    "eventDispatcher": {
      "id": "eventDispatcher",
      "type": "ANGULAR_SERVICE",
      "suffix": "EventDispatcher",
      "folder": "adapters/secondary/event-dispatchers",
      "insideOf": "Lib"
    },
    "page": {
      "id": "page",
      "type": "ANGULAR_COMPONENT",
      "suffix": "Page",
      "folder": "pages",
      "insideOf": "App",
      "config": {
        "stylesExtension": "none",
        "viewEncapsulation": "None",
        "selector": "none",
        "changeDetectionStrategy": "OnPush"
      }
    }
  }
}
``` -->
