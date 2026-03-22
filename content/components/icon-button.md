---
title: Icon Button
description: Square button designed for icon-only actions without a text label
category: Actions
---

## Overview

Icon buttons trigger actions using a visual symbol instead of text. They conserve space in toolbars, tables, and compact interfaces where the icon alone is recognizable enough to communicate the action.

## Usage

### Default

```tsx:live
<IconButton aria-label="Settings">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</IconButton>
```

### Destructive

Use for irreversible actions like delete or remove.

```tsx:live
<IconButton variant="destructive" aria-label="Delete">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
</IconButton>
```

### Outline

```tsx:live
<IconButton variant="outline" aria-label="Edit">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
</IconButton>
```

### Sizes

```tsx:live
<IconButton size="sm" aria-label="Small">
  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</IconButton>
```

```tsx:live
<IconButton size="md" aria-label="Medium">
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</IconButton>
```

```tsx:live
<IconButton size="lg" aria-label="Large">
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</IconButton>
```

### With tooltip

Pair icon buttons with a tooltip to surface the label visually on hover.

```tsx:live
<Tooltip content="Delete item">
  <IconButton variant="ghost" aria-label="Delete">
    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </IconButton>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| aria-label | `string` | — | **Required.** Describes the action for screen readers |
| variant | `"default" \| "destructive" \| "secondary" \| "outline" \| "ghost"` | `"default"` | Visual style |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button dimensions |
| disabled | `boolean` | `false` | Prevents interaction |
| onClick | `function` | — | Click handler |

## Accessibility

- `aria-label` is required — without it, screen readers have nothing to announce
- `Tab` focuses the button; `Enter` or `Space` activates it
- Pair with `Tooltip` so sighted users can discover the label on hover
- Minimum touch target is 44×44px on mobile

## When to use

**Use an icon button when:**
- The icon is universally recognizable (close, delete, edit, search)
- Space is too limited for a text label
- Inside a toolbar or table row where a label would be redundant

**Use a regular Button instead** when the action is a primary call to action, the icon alone may be ambiguous, or the context is unfamiliar to the user.
