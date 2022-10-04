---
sidebar_position: 1
---

# Coding Standards

Start by creating a `coding-standards.json` file in your root workspace folder. The file should look like the one below:

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
