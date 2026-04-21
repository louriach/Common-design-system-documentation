---
title: Input
description: Text input field component for collecting user data entry
category: Forms
---

## Overview

Inputs collect short, single-line text — names, emails, passwords, search queries. Use them for any free-form entry that doesn't fit a predefined option list.

## Usage

### Default

```tsx:live
<Input placeholder="Enter your name" />
```

### With label

```tsx:live
<Input label="Email" type="email" placeholder="you@example.com" />
```

### With helper text

```tsx:live
<Input label="Password" type="password" helperText="Must be at least 8 characters" />
```

### Required

```tsx:live
<Input label="Username" required placeholder="Choose a username" />
```

### Error state

```tsx:live
<Input label="Email" type="email" error helperText="Please enter a valid email address" />
```

### Disabled

```tsx:live
<Input label="Disabled" disabled value="Cannot edit" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url" \| "search"` | `"text"` | Input type — affects keyboard on mobile |
| label | `string` | — | Label above the input |
| placeholder | `string` | — | Hint text when empty |
| value | `string` | — | Controlled value |
| defaultValue | `string` | — | Initial value (uncontrolled) |
| onChange | `function` | — | Change handler |
| disabled | `boolean` | `false` | Prevents interaction |
| readOnly | `boolean` | `false` | Viewable but not editable |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message below input |
| name | `string` | — | Form submission name |

## Accessibility

- Always pair a visible label with the input — don't rely on placeholder alone
- On error, set `aria-invalid="true"` and associate the error message with `aria-describedby`
- `Tab` moves focus to the input; all standard text editing keyboard shortcuts work within it
- Helper text is linked with `aria-describedby`

## When to use

**Use an input when:**
- The user needs to enter unique, free-form text
- Single-line entry is sufficient

**Use a Textarea** for multi-line entries. **Use a Select or Combobox** when the user chooses from a predefined list. **Use a DatePicker** for date fields.
