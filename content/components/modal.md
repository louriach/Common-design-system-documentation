---
title: Modal
description: Overlay dialog component for displaying focused content and interactions
category: Feedback
---

## Overview

Modals display content in an overlay that demands attention before the user can continue. They block the background until the user acts or explicitly dismisses the dialog — use them when immediate focus is required.

## Usage

### Confirmation dialog

```tsx:live
<Modal title="Delete Item" description="This action cannot be undone" open={true}>
  <div className="space-y-4">
    <p className="text-gray-700 dark:text-gray-300">
      Are you sure you want to delete this item?
    </p>
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  </div>
</Modal>
```

### Form modal

```tsx:live
<Modal title="Add New Item" size="lg" open={true}>
  <div className="space-y-4">
    <Input label="Name" placeholder="Enter item name" />
    <Textarea label="Description" placeholder="Enter description" />
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  </div>
</Modal>
```

### Non-closable

For operations that must complete before the user continues.

```tsx:live
<Modal title="Processing" closable={false} open={true}>
  <p className="text-gray-700 dark:text-gray-300">Please wait while we process your request...</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| open | `boolean` | `false` | Controls visibility |
| onOpenChange | `function` | — | Called when the modal should open or close |
| title | `string` | — | Dialog heading |
| description | `string` | — | Optional subtitle below the title |
| size | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Modal width |
| closable | `boolean` | `true` | Shows close button; allows Escape to close |

## Accessibility

- Uses `role="dialog"` and `aria-modal="true"`; `title` is linked via `aria-labelledby`
- Focus is trapped inside the modal while it is open; returns to the trigger element on close
- `Escape` closes dismissible modals
- Background content is hidden from screen readers while the modal is open

## When to use

**Use a modal when:**
- A decision or action is required before continuing
- A focused form interaction shouldn't navigate away from the current page
- Confirming a destructive or irreversible action

**Don't use a modal when:**
- Simple feedback is sufficient — use an Alert or Toast
- The content is too long to read in an overlay — use a separate page
- The dialog would be triggered repeatedly in quick succession
