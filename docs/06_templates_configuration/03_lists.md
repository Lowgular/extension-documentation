---
sidebar_position: 3
---

# Lists

You can configure ready to use lists, which can be connected with data properties from the component. These will appear in the `Actions...` -> `Display Data` list for array type of properties.

```
{
  "lists": {
    "yourFavouriteList": {
      "list": "<mat-list role=\"list\">$content$</mat-list>",
      "item": "<mat-list-item role=\"listitem\" *ngFor=\"let $itemVariable$ of $listVariable$\">{{$itemVariable$}}</mat-list-item>"
    }
  }
}
```

## Properties of list templates

### List

**Required** property.

This is how Lowgular will display container of the list. You can decide if you want to use `ul`, `mat-list` or `select-box` or maybe `grid`.

### Item

**Required** property.

This is how Lowgular will display item of the list. You can decide if you want use `li` or `mat-list-item` or maybe `option`.
