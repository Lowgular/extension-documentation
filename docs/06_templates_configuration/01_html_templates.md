---
sidebar_position: 1
---

# Html Templates

Start by creating a `html-templates.json` file in your root workspace folder. The file should look like the one below:

```
{
  "inputs": {
    "input-default": "<input type=\"$type$\" formControlName=\"$formControlName$\" placeholder=\"$label$\">"
  },
  "layouts": {
    "section": "<section></section>"
  },
  "forms": {
    "form": {
      "input": "$inputs.input-default$",
      "formSubmit": "<input type=\"submit\" value=\"$content$\">",
      "form": "<form [formGroup]=\"$formVariable$\" (ngSubmit)=\"$submitCallback$\">$content$</form>"
    }
  },
  "lists": {
    "ul": {
      "list": "<ul>$content$</ul>",
      "item": "<li *ngFor=\"let $itemVariable$ of $listVariable$\">$content$</li>"
    },
    "table": {
      "list": "<table>$content$</table>",
      "item": "<tr *ngFor=\"let $itemVariable$ of $listVariable$\"><td>$content$</td></tr>"
    }
  },
  "details": {
    "content": {
      "container": "<ng-container *ngIf=\"$detailVariable$ | async as $itemVariable$\">$content$</ng-container>",
      "content": "$content$"
    },
    "text": {
      "container": "<ng-container *ngIf=\"$detailVariable$ | async as $itemVariable$\">$content$</ng-container>",
      "content": "{{ $itemVariable$ }}"
    }
  }
}

```
