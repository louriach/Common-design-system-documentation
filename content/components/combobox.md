---
title: Combobox
description: Searchable input component that combines text entry with dropdown selection
category: Forms
---

## Overview

A combobox combines a text input with a dropdown list, letting users type to filter options or pick directly from the list. Use it when the option set is large enough that scrolling a plain select would be slow or frustrating.

## Usage

### Default

```tsx:live
<Combobox
  label="Country"
  placeholder="Search countries..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" }
  ]}
/>
```

### With helper text

```tsx:live
<Combobox
  label="Product"
  placeholder="Search products..."
  helperText="Type to filter available products"
  options={[
    { value: "laptop", label: "Laptop" },
    { value: "phone", label: "Phone" },
    { value: "tablet", label: "Tablet" }
  ]}
/>
```

### Error state

```tsx:live
<Combobox
  label="City"
  placeholder="Search cities..."
  error
  helperText="Please select a valid city"
  options={[
    { value: "nyc", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" }
  ]}
/>
```

### Disabled

```tsx:live
<Combobox
  label="Status"
  placeholder="Select status..."
  disabled
  value="active"
  options={[
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" }
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Array<{value: string, label: string, disabled?: boolean}>` | — | **Required.** Selectable options |
| label | `string` | — | Label above the combobox |
| placeholder | `string` | — | Placeholder when empty |
| value | `string` | — | Controlled selected value |
| onChange | `function` | — | Called when selection changes |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| disabled | `boolean` | `false` | Prevents interaction |
| required | `boolean` | `false` | Marks as required |

## Accessibility

- Uses `role="combobox"` with `aria-expanded`, `aria-autocomplete="list"`, and `aria-controls`
- `aria-activedescendant` tracks the highlighted option
- `Arrow` keys navigate options; `Enter` selects; `Escape` closes the dropdown
- Label is associated via `htmlFor`/`id`; helper text via `aria-describedby`

## When to use

**Use a combobox when:**
- The list has more than ~10 options and typing to filter would save time
- Users may not know the exact option name and need to search

**Use a Select instead** for short, well-known lists where users don't need to type. **Use a plain Input** for free-form text with no predefined options.
