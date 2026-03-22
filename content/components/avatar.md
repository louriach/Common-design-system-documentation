---
title: Avatar
description: Circular image component for displaying user profile pictures, initials, or icons
category: Data Display
---

## Overview

Avatars represent a person or entity with a profile image, generated initials, or a fallback icon. They make user lists, comments, and notifications easier to scan by putting a face to a name.

## Usage

### With image

Shows the user's photo; falls back to initials if the image fails to load.

```tsx:live
<Avatar src="https://i.pravatar.cc/150?img=1" alt="User" name="Jane Smith" />
```

### With initials

Generated from the `name` prop when no image is provided.

```tsx:live
<Avatar name="John Doe" />
```

### With status indicator

A colored dot in the bottom-right corner communicates presence.

```tsx:live
<Avatar src="https://i.pravatar.cc/150?img=2" name="Sarah Johnson" size="lg" status="online" />
```

### Sizes

Available in four sizes to suit different contexts.

```tsx:live
<div className="flex gap-4 items-center">
  <Avatar name="SM" size="sm" />
  <Avatar name="MD" size="md" />
  <Avatar name="LG" size="lg" />
  <Avatar name="XL" size="xl" />
</div>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | — | User name — generates initials when no image is shown |
| src | `string` | — | Image URL |
| alt | `string` | — | Alt text for the image (defaults to `name`) |
| size | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Avatar diameter |
| status | `"online" \| "offline" \| "away" \| "busy"` | — | Presence indicator |
| fallback | `ReactNode` | — | Custom content when image is absent or fails |

## Accessibility

- Always provide `name` or `alt` so screen readers can identify the user
- Status indicators are visual-only — add `aria-label` if the status is functionally important
- Initials have sufficient contrast against their generated background color

## When to use

**Use an avatar when:**
- Representing a person in a list, comment thread, or notification
- Showing who authored or owns something

**Don't use an avatar when:**
- Representing a non-person entity (use an icon instead)
- User privacy concerns make showing identifying imagery inappropriate
