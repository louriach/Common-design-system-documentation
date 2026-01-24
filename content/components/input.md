---
title: Input
description: Text input field component for user data entry
category: Forms
---

## Overview
Input component for collecting text data from users. Supports various input types including text, email, password, and number.

## Usage
```tsx
<input type="text" placeholder="Enter text..." />
```

## Props
- `type`: "text" | "email" | "password" | "number" | "tel" | "url"
- `placeholder`: string - Placeholder text when input is empty
- `disabled`: boolean - Disables the input
- `readonly`: boolean - Makes the input read-only
- `required`: boolean - Marks the input as required
- `maxlength`: number - Maximum character limit
- `value`: string - Controlled value
- `onChange`: function - Change event handler

## Accessibility
- Always associate with a `<label>` element using `htmlFor` attribute
- Use `aria-label` if label is not visible
- Use `aria-describedby` for error messages or help text
- Provide clear error states with color + icon + text
- Support keyboard navigation and focus states
- Consider autocomplete attributes for better UX

## States
- Default
- Focus
- Hover
- Disabled
- Error
- Success
- Loading

## Best Practices
- Always provide visible labels
- Display error messages clearly
- Use appropriate input types for better mobile UX
- Validate input in real-time when appropriate
- Provide feedback for success and error states
- Use placeholder text sparingly - it's not a substitute for labels

