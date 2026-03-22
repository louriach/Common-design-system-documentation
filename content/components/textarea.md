---
title: Textarea
description: Multi-line text input component for collecting longer form entries
category: Forms
---

## Overview

Textareas collect multi-line text — comments, descriptions, messages, notes. Use them whenever the expected input is more than a sentence or benefits from visible line breaks.

## Usage

### Default

```tsx:live
<Textarea placeholder="Enter your message" />
```

### With label

```tsx:live
<Textarea label="Description" placeholder="Describe your project" />
```

### With helper text

```tsx:live
<Textarea label="Feedback" helperText="Please provide detailed feedback about your experience" placeholder="Your feedback here" />
```

### Required

```tsx:live
<Textarea label="Comments" required placeholder="Share your thoughts" />
```

### Error state

```tsx:live
<Textarea label="Message" error helperText="Message must be at least 10 characters" placeholder="Enter your message" />
```

### Disabled

```tsx:live
<Textarea label="Notes" disabled defaultValue="This field cannot be edited" />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| label | `string` | — | Label above the textarea |
| placeholder | `string` | — | Hint text when empty |
| value | `string` | — | Controlled value |
| defaultValue | `string` | — | Initial value (uncontrolled) |
| rows | `number` | `4` | Visible line height |
| onChange | `function` | — | Change handler |
| disabled | `boolean` | `false` | Prevents interaction |
| readOnly | `boolean` | `false` | Viewable but not editable |
| required | `boolean` | `false` | Marks as required |
| error | `boolean` | `false` | Error styling |
| helperText | `string` | — | Helper or error message |
| maxLength | `number` | — | Character limit |

## Accessibility

- Always provide a visible label — placeholder text is not a substitute
- `aria-invalid` is set when `error` is true; error message is associated via `aria-describedby`
- `Tab` focuses the textarea; all standard text editing shortcuts work within it
- Resize handle is visible by default — don't disable it unless layout requires it

## When to use

**Use a textarea when:**
- The expected input is longer than a single line (comments, bio, description, notes)
- Users benefit from seeing what they've written in context

**Use a plain Input** for single-line entries. **Use a read-only textarea** for displaying pre-filled content that users might want to copy but not edit.
