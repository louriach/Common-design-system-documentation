---
title: Checkbox
description: Selection control for choosing one or more options from a list
category: Forms
---

## Overview

Checkboxes let people select one or more independent options. Each operates on its own — unlike radio buttons, selecting one doesn't affect the others. Use them for multi-select forms, preference settings, filtering, and terms acceptance.

## Usage

### Default

The unchecked resting state.

```tsx:live
<Checkbox label="Accept terms and conditions" />
```

### Checked

The selected state after a user has made a choice.

```tsx:live
<Checkbox label="Subscribe to newsletter" checked />
```

### With helper text

Use helper text to add context below the label — useful when the label alone isn't self-explanatory.

```tsx:live
<Checkbox label="Send me updates" helperText="We'll send you product updates and news" />
```

### Required

Adds a visual indicator that the field must be checked before submitting.

```tsx:live
<Checkbox label="I agree to the terms" required />
```

### Error

Shown after validation fails. The helper text slot becomes the error message.

```tsx:live
<Checkbox label="Accept terms" error helperText="You must accept the terms to continue" />
```

### Indeterminate

Used in "select all" patterns when some — but not all — children are selected.

```tsx:live
<Checkbox label="Select all" indeterminate />
```

### Disabled

The control is visible but cannot be interacted with.

```tsx:live
<Checkbox label="Disabled option" disabled />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | — | Label text displayed next to the checkbox |
| checked | `boolean` | — | Controlled checked state |
| defaultChecked | `boolean` | `false` | Initial checked state (uncontrolled) |
| indeterminate | `boolean` | `false` | Shows a dash — use for partial "select all" |
| disabled | `boolean` | `false` | Prevents interaction |
| required | `boolean` | `false` | Shows required indicator |
| error | `boolean` | `false` | Applies error styling |
| helperText | `string` | — | Helper or error message below the checkbox |
| name | `string` | — | Form field name |
| value | `string` | — | Value submitted with the form |
| onChange | `function` | — | Change event handler |

## Accessibility

- Always pair a `<label>` with the input — don't rely on `aria-label` alone
- `Space` toggles the checkbox; `Tab` moves focus
- Checked, unchecked, and indeterminate states are all announced by screen readers
- For a group of checkboxes, wrap in `<fieldset>` with a `<legend>`

## When to use

**Use a checkbox when:**
- The user can select multiple items independently
- A single on/off preference needs to be saved (not applied immediately)
- Accepting terms or confirming a choice

**Use a radio button instead when** the user must choose exactly one option from a group. **Use a toggle instead** when the action takes effect immediately.
