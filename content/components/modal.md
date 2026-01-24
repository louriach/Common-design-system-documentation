---
title: Modal
description: Dialog component for displaying content in a focused overlay
category: Overlays
---

## Overview
Modal component displays content in a dialog box that overlays the main content. Used for confirmations, forms, alerts, and focused tasks.

## Usage
```tsx
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h2>Modal Title</h2>
    </div>
    <div class="modal-content">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </div>
</div>
```

## Props
- `isOpen`: boolean - Controls modal visibility
- `onClose`: function - Callback when modal should close
- `size`: "sm" | "md" | "lg" | "fullscreen"
- `closeButton`: boolean - Show close button
- `backdrop`: boolean - Show backdrop overlay
- `closeOnBackdropClick`: boolean - Close when clicking backdrop
- `closeOnEscape`: boolean - Close on Escape key

## Accessibility
- Use semantic `<dialog>` element or proper ARIA roles
- Implement focus trap - focus stays within modal
- Restore focus to trigger element when modal closes
- Use `aria-modal="true"` on modal container
- Provide clear close mechanism (button or Escape key)
- Use `aria-labelledby` to associate modal with title
- Use `aria-describedby` for descriptions
- Avoid scrolling body when modal is open
- Ensure backdrop has sufficient contrast

## States
- Open
- Closed
- Loading
- Error
- Animating (enter/exit)

## Best Practices
- Use for important content requiring user attention
- Provide clear ways to close the modal
- Keep content focused and concise
- Avoid nested modals when possible
- Show loading state for async operations
- Confirm destructive actions
- Use animations for entrance/exit
- Mobile: consider full-screen modals on small screens

