---
sidebar_position: 4
---

# External

External is used to reference external npm packages or typescript packages in the same monorepo

Default config is:

```
{
  "external": {
    "httpClient": {
      "id": "httpClient",
      "type": "HttpClient",
      "module": "@angular/common/http"
    }
  }
}
```

## Angular

All angular libraries can be used to **link** inside of entity relationship.

Example of adding `ActivatedRoute`

```
{
  "external": {
    "activatedRoute": {
      "id": "activatedRoute",
      "type": "ActivatedRoute",
      "module": "@angular/router"
    }
  }
}
```

Then you can use it in `entityRelations` config

```
{
  "entityRelations": {
    "component": {
      "activatedRoute": ["CONSTRUCTOR"]
    }
  }
}
```

Now you can **inject** activated route in the component
