---
title: Button
description: Primary action component for triggering events
category: Actions
---

## Overview

Buttons trigger actions. Use them for form submissions, confirming decisions, and any interaction that causes something to happen — as opposed to links, which navigate.

## Usage

### Default

The primary action in a context; use once per section.

```tsx:live
<Button>Click me</Button>
```

### Variants

Match button weight to action importance.

```tsx:live
<Button variant="default">Default</Button>
```

```tsx:live
<Button variant="secondary">Secondary</Button>
```

```tsx:live
<Button variant="outline">Outline</Button>
```

```tsx:live
<Button variant="ghost">Ghost</Button>
```

```tsx:live
<Button variant="destructive">Destructive</Button>
```

### Disabled

Use when the action is not currently available; consider adding a tooltip to explain why.

```tsx:live
<Button disabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `"default" \| "secondary" \| "outline" \| "ghost" \| "destructive"` | `"default"` | Visual style |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| disabled | `boolean` | `false` | Prevents interaction |
| type | `"button" \| "submit" \| "reset"` | `"button"` | HTML button type |
| onClick | `function` | — | Click event handler |

## Accessibility

- `Enter` and `Space` activate a focused button
- Always provide visible label text; for icon-only buttons use `aria-label`
- Focus ring must be clearly visible
- Disabled buttons are excluded from tab order — use `aria-disabled` instead if the button should remain focusable

## When to use

**Use a button when:**
- The action causes a change (save, delete, submit, open modal)
- The interaction is a primary call to action

**Use a link instead when** the action navigates to another page or section. **Use `variant="destructive"`** for irreversible actions like deleting data.
