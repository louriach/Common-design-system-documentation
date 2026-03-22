---
title: Date Picker
description: Input component for selecting dates from a calendar interface
category: Forms
---

## Overview

A date picker lets users select a date from a calendar interface. It reduces typing errors and enforces valid date formats — particularly useful for appointment scheduling, event dates, and date-constrained form fields.

## Usage

### Default

```tsx:live
<DatePicker label="Birth Date" />
```

### With helper text

```tsx:live
<DatePicker label="Event Date" helperText="Select a date within the next 30 days" />
```

### With date constraints

Restricts the selectable range using `min` and `max`.

```tsx:live
<DatePicker label="Check-in Date" min="2024-01-01" max="2024-12-31" />
```

### Error state

```tsx:live
<DatePicker label="Due Date" error helperText="Please select a valid date" />
```

### Disabled

```tsx:live
<DatePicker label="Start Date" disabled value="2024-01-15" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | — | Label above the input |
| value | `string` | — | Controlled date value (YYYY-MM-DD) |
| defaultValue | `string` | — | Initial value (uncontrolled) |
| onChange | `function` | — | Change handler |
| min | `string` | — | Earliest selectable date (YYYY-MM-DD) |
| max | `string` | — | Latest selectable date (YYYY-MM-DD) |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| disabled | `boolean` | `false` | Prevents interaction |

## Accessibility

- Uses the native `<input type="date">` for built-in keyboard navigation and mobile support
- Label is associated via `htmlFor`/`id`; helper text via `aria-describedby`
- `Tab` focuses the input; browser-native calendar navigation handles date selection
- `min` and `max` constraints are enforced natively, preventing invalid date selection

## When to use

**Use a date picker when:**
- The user needs to pick a specific calendar date
- Date constraints (min/max) need to be enforced visually

**Don't use a date picker when:**
- The date is well-known and faster to type (use a plain text input)
- The user needs to select a time as well (use a datetime picker)
- Selecting relative dates like "tomorrow" or "in 2 weeks" (use a different pattern)
