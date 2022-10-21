---
sidebar_position: 5
---

# Forms and inputs

You can configure ready to use forms, which can be connected with data properties from the component. These will appear in the `Actions...` -> `Display Data` list for Reactive Forms types of properties, like `FormGroup`.

```
{
  "inputs": {
    "input-default": "<input matInput type=\"text\" placeholder=\"$label$\" formControlName=\"$formControlName$\" required>",
    "input-text": "<input matInput type=\"text\" placeholder=\"$label$\" formControlName=\"$formControlName$\" required>",
    "input-number": "<input matInput type=\"number\" placeholder=\"$label$\" formControlName=\"$formControlName$\" required>",
    "input-submit": "<button type=\"submit\" mat-raised-button color=\"primary\">$content$</button>"
  },
  "forms": {
    "mat-form": {
      "form": "<form [formGroup]=\"$formVariable$\" (ngSubmit)=\"$submitCallback$\">$content$</form>",
      "input": "<div><mat-form-field appearance=\"fill\"><mat-label>$label$</mat-label>$inputs.input-text$<mat-error *ngIf=\"$formVariable$.get('$formControlName$')!.invalid\">$formControlName$ is invalid</mat-error></mat-form-field></div>",
      "formSubmit": "<div>$inputs.input-submit$</div>"
    }
  }
}
```

## Properties of forms templates

### form

**Required** property.

This is how Lowgular will display container of the form. You can decide if you want to use `form` with submit or add custom container of the form.

### input

**Required** property.

This is how Lowgular will display single input of the form. You can decide if you want use traditional `input` or material `matInput`. In this section you can use `$inputs.custom-type$` variables to display correct input base on type.

Inputs can be set by adding new types to `inputs` section.

### formSubmit

**Required** property.

This is how Lowgular will display submit button. You can decide what you want to use. Also here you can use `$inputs.custom-type$` variables to display correct input base on type.
