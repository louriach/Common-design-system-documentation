---
title: Radio
description: Selection control component for choosing a single option from a mutually exclusive group
category: Forms
---

## Overview

Radio buttons let users choose exactly one option from a group. Unlike checkboxes, selecting one radio automatically deselects the others. Use them for single-choice questions where all options should be visible simultaneously.

## Usage

### Radio group

Always group radios with a shared `name` and wrap them in a `<Fieldset>` with a legend.

```tsx:live
<div>
  <Radio name="framework" label="React" value="react" defaultChecked />
  <Radio name="framework" label="Vue" value="vue" />
  <Radio name="framework" label="Angular" value="angular" />
</div>
```

### With helper text

```tsx:live
<Radio name="plan" label="Basic Plan" value="basic" helperText="Perfect for individuals" />
```

### Error state

```tsx:live
<Radio name="terms" label="I agree" value="agree" error helperText="You must select an option" />
```

### Disabled option

Individual options can be disabled while others remain interactive.

```tsx:live
<div>
  <Radio name="choice" label="Available" value="available" defaultChecked />
  <Radio name="choice" label="Unavailable" value="unavailable" disabled />
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | — | **Required.** Groups radio buttons together |
| value | `string` | — | **Required.** Value submitted when selected |
| label | `string` | — | Label text next to the radio |
| checked | `boolean` | — | Controlled checked state |
| defaultChecked | `boolean` | `false` | Initial state (uncontrolled) |
| disabled | `boolean` | `false` | Prevents interaction |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| onChange | `function` | — | Change handler |

## Accessibility

- Always wrap a radio group in `<fieldset>` with `<legend>` so screen readers announce the group question
- `Tab` moves focus into the group; arrow keys navigate between options within it
- `Space` selects the focused radio
- All radios in a group share the same `name` attribute — this is what creates mutual exclusivity

## When to use

**Use radio buttons when:**
- The user must choose exactly one option from a small set (2–6 options)
- All options should be visible simultaneously

**Use a Select** for more than ~6 options or when vertical space is limited. **Use a Checkbox** when the user can select zero or multiple options. **Use a Toggle** for immediate binary on/off actions.
