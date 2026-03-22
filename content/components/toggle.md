---
title: Toggle
description: Switch control component for turning options on or off
category: Forms
---

## Overview

A toggle is a switch-style control for binary on/off choices. It visually emphasizes the on/off nature of a setting more strongly than a checkbox — ideal for preferences and features that take effect immediately or are persisted independently.

## Usage

### Default

```tsx:live
<Toggle label="Enable notifications" />
```

### On

```tsx:live
<Toggle label="Dark mode" checked />
```

### With helper text

```tsx:live
<Toggle label="Email notifications" helperText="Receive updates about your account activity" />
```

### Error state

```tsx:live
<Toggle label="Accept terms" error helperText="You must accept the terms to continue" />
```

### Disabled

```tsx:live
<Toggle label="Auto-save" disabled />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | — | Label text next to the toggle |
| checked | `boolean` | — | Controlled on/off state |
| defaultChecked | `boolean` | `false` | Initial state (uncontrolled) |
| disabled | `boolean` | `false` | Prevents interaction |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| name | `string` | — | Form submission name |
| onChange | `function` | — | Change handler |

## Accessibility

- Uses `role="switch"` with `aria-checked` reflecting the current state
- `Tab` focuses the toggle; `Space` or `Enter` toggles it
- Label is associated via `htmlFor`/`id`; helper text via `aria-describedby`
- Don't rely on color alone to communicate state — the handle position conveys on/off regardless of color

## When to use

**Use a toggle when:**
- The choice is binary on/off with no ambiguity
- The setting is a preference or feature activation

**Use a checkbox instead** when the toggle is part of a multi-select group or when the save/submit pattern fits better (toggle implies immediate effect). **Use a radio button** when the user must pick one option from several.
