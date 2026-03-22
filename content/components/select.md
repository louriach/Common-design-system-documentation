---
title: Select
description: Dropdown component for choosing a single option from a list of predefined choices
category: Forms
---

## Overview

A select lets users pick one option from a dropdown list. It saves space compared to radio buttons and works best when the options are well-known and don't need explanation.

## Usage

### Default

```tsx:live
<Select label="Country" placeholder="Select a country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
  <option value="au">Australia</option>
</Select>
```

### With helper text

```tsx:live
<Select label="Shipping Option" helperText="Standard shipping takes 5-7 business days" placeholder="Select shipping">
  <option value="standard">Standard Shipping</option>
  <option value="express">Express Shipping</option>
  <option value="overnight">Overnight Shipping</option>
</Select>
```

### Error state

```tsx:live
<Select label="State" error helperText="Please select a state" placeholder="Choose a state">
  <option value="ny">New York</option>
  <option value="ca">California</option>
  <option value="tx">Texas</option>
</Select>
```

### Disabled

```tsx:live
<Select label="Status" disabled value="active">
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
  <option value="pending">Pending</option>
</Select>
```

### With option groups

```tsx:live
<Select label="Course" placeholder="Select a course">
  <optgroup label="Web Development">
    <option value="html">HTML Basics</option>
    <option value="css">CSS Fundamentals</option>
    <option value="js">JavaScript</option>
  </optgroup>
  <optgroup label="Data Science">
    <option value="python">Python</option>
    <option value="sql">SQL</option>
  </optgroup>
</Select>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | — | Label above the select |
| placeholder | `string` | — | Default unselected option text |
| value | `string` | — | Controlled selected value |
| defaultValue | `string` | — | Initial value (uncontrolled) |
| onChange | `function` | — | Change handler |
| disabled | `boolean` | `false` | Prevents interaction |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| name | `string` | — | Form submission name |

## Accessibility

- Uses native `<select>` for built-in keyboard navigation and mobile picker support
- Label is associated via `htmlFor`/`id`; helper text via `aria-describedby`
- `Tab` focuses the select; `Space`/`Enter` opens it; arrow keys navigate options; `Escape` closes
- `aria-invalid` is set on error; required state is announced

## When to use

**Use a select when:**
- There are 5–15 predefined options
- Space is limited and radio buttons would take too much room
- Options are familiar and don't require explanation

**Use radio buttons** for 2–4 options when space allows and all options should be visible. **Use a Combobox** for large lists (10+) where filtering by typing would save time.
