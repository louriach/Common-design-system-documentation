---
title: Button Group
description: Container component for organizing related action buttons together
category: Actions
---

## Overview

Button groups visually connect related actions into a single unit. They make it clear which buttons belong to the same workflow step — such as form submit/cancel pairs or toolbar action sets.

## Usage

### Form actions

The primary action sits on the right in LTR interfaces.

```tsx:live
<div>
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Save Changes</Button>
</div>
```

### Three actions

Ghost for destructive or low-priority; secondary for mid-weight; primary for the main action.

```tsx:live
<div>
  <Button variant="ghost">Delete</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="default">Publish</Button>
</div>
```

### Filter set

Uniform weight when all actions are equally selectable.

```tsx:live
<div>
  <Button variant="outline">All</Button>
  <Button variant="outline">Active</Button>
  <Button variant="outline">Archived</Button>
</div>
```

## Props

Button groups are layout patterns — individual `Button` components are placed inside a flex container. Each button accepts its own props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| variant | `"default" \| "secondary" \| "outline" \| "ghost"` | `"default"` | Visual weight of the button |
| size | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| disabled | `boolean` | `false` | Disables this button independently |

## Accessibility

- Each button needs a unique, descriptive accessible name
- `Tab` moves focus through buttons in visual order; `Enter` or `Space` activates the focused button
- Icon-only buttons in a group require `aria-label`
- Buttons in a group don't share state — each manages its own disabled/loading condition

## When to use

**Use a button group when:**
- Two or more related actions appear in the same context (form, toolbar, row)
- Proximity communicates that the actions are part of the same workflow step

**Don't use a button group when:**
- There's only one action — use a single button
- Users are selecting between mutually exclusive options — use a segmented control or radio buttons
- The buttons are unrelated and happen to appear near each other
