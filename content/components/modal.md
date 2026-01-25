---
title: Modal
description: Overlay dialog component for displaying focused content and interactions
category: Feedback
---

## Overview

Modal components display content in an overlay that requires user attention before continuing. They create a focused experience by temporarily blocking interaction with the background content. Modals work well for confirmations, forms, detailed views, and any content that needs immediate attention without navigating away from the current page.

## Usage

### Basic Modal
```tsx:live
<Modal title="Confirm Action" description="Are you sure you want to proceed?" open={true}>
  <p className="text-gray-700 dark:text-gray-300">This action cannot be undone.</p>
</Modal>
```

### Modal with Custom Content
```tsx:live
<Modal title="User Details" size="lg" open={true}>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1">Name</label>
      <p className="text-gray-900 dark:text-gray-100">John Doe</p>
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Email</label>
      <p className="text-gray-900 dark:text-gray-100">john@example.com</p>
    </div>
  </div>
</Modal>
```

### Non-Closable Modal
```tsx:live
<Modal title="Processing" closable={false} open={true}>
  <p className="text-gray-700 dark:text-gray-300">Please wait while we process your request...</p>
</Modal>
```

### Large Modal
```tsx:live
<Modal title="Edit Profile" size="xl" description="Update your profile information" open={true}>
  <div className="space-y-4">
    <Input label="Full Name" placeholder="Enter your name" />
    <Input label="Email" type="email" placeholder="you@example.com" />
    <Textarea label="Bio" placeholder="Tell us about yourself" />
  </div>
</Modal>
```

## Props

- `open`: boolean - Controls whether the modal is visible (default: false)
- `onOpenChange`: function - Callback when modal open state changes
- `title`: string - Title text displayed in the modal header
- `description`: string - Optional description text below the title
- `children`: ReactNode - Content displayed in the modal body
- `size`: "sm" | "md" | "lg" | "xl" - Modal width size (default: "md")
- `closable`: boolean - Whether the modal can be closed (default: true)
- `className`: string - Additional CSS classes

## States

### Closed
The modal is not visible and does not block interaction with the page.

**Visual characteristics:**
- Modal is not rendered
- Page content is fully interactive
- No overlay visible
- Body scroll is enabled

### Open
The modal is visible and blocks interaction with background content.

**Visual characteristics:**
- Modal appears centered on screen
- Backdrop overlay dims background
- Body scroll is disabled
- Focus is trapped within modal
- Close button visible (if closable)

### Focused
When the modal is open, focus is managed within the modal.

**Visual characteristics:**
- Focus moves to modal content
- Tab key cycles within modal
- Escape key closes modal (if closable)
- Focus indicators are visible
- Background content is not focusable

## Use Cases

### Confirmations
Use modals for confirming important actions before they execute.

**Example:**
- Delete confirmations
- Unsaved changes warnings
- Payment confirmations
- Account deletion

### Forms
Use modals for focused form interactions without leaving the page.

**Example:**
- Quick edit forms
- Contact forms
- Settings forms
- Search forms

### Detailed Views
Use modals to show additional information without navigation.

**Example:**
- Image galleries
- Product details
- User profiles
- Document previews

### Notifications
Use modals for important messages that require acknowledgment.

**Example:**
- System updates
- Feature announcements
- Error notifications
- Success messages

## Anatomy

Modal components include these elements:

1. **Backdrop** - Semi-transparent overlay that dims background
2. **Modal Container** - Main content wrapper with rounded corners
3. **Header** - Section containing title and close button
4. **Title** - Main heading text
5. **Description** - Optional subtitle or explanation
6. **Close Button** - X icon button to dismiss modal
7. **Content Area** - Main body where children are rendered
8. **Footer** - Optional section for actions (if needed)

## Accessibility

### Keyboard Navigation
- Escape key closes the modal (if closable)
- Tab key moves focus within modal
- Shift+Tab moves focus backward
- Focus is trapped within modal when open
- Focus returns to trigger element when closed
- Enter or Space activates focused elements

### Screen Reader Support
- Modal uses `role="dialog"` and `aria-modal="true"`
- Title is associated with `aria-labelledby`
- Description is associated with `aria-describedby`
- Close button has `aria-label`
- Focus management is announced
- Background content is hidden from screen readers

### Visual Requirements
- Backdrop must have sufficient contrast
- Modal content must have at least 4.5:1 contrast
- Focus indicators must be clearly visible
- Close button must be easily identifiable
- Modal must be clearly distinguished from background

### Best Practices
- Always provide a clear title
- Include a close button for dismissible modals
- Trap focus within the modal
- Return focus to trigger when closed
- Disable body scroll when modal is open
- Provide keyboard escape route
- Announce modal opening to screen readers

## Content Guidelines

### Titles
- Use clear, descriptive titles
- Keep titles concise (1-6 words)
- Match title to modal purpose
- Use sentence case or title case consistently

### Descriptions
- Provide context when needed
- Keep descriptions brief
- Explain why the modal appeared
- Use when title alone isn't sufficient

### Content
- Keep content focused and relevant
- Avoid overwhelming users with too much content
- Use appropriate modal size for content
- Consider scrolling for long content

## Best Practices

### When to Use
- For confirmations requiring user decision
- For focused form interactions
- For displaying detailed information
- For important notifications
- When action is required before continuing

### When Not to Use
- For simple information (use Alert or Tooltip)
- For navigation (use regular navigation)
- For non-critical messages (use Toast)
- When content is too long (consider separate page)
- For frequent, repetitive actions

### Design Considerations
- Choose appropriate size for content
- Ensure modal is responsive on mobile
- Test with various content lengths
- Consider animation for open/close
- Maintain consistent styling
- Ensure backdrop is clearly visible

## Related Components

- **Alert** - For non-blocking messages
- **Tooltip** - For contextual help
- **Toast** - For temporary notifications
- **Dialog** - Similar to modal but may have different behavior

## Technical Considerations

### Implementation
- Modals use fixed positioning for overlay
- Body scroll is disabled when modal is open
- Focus management traps focus within modal
- Escape key handling for closing
- Backdrop click closes modal (if enabled)
- Portal rendering for proper z-index stacking

### Browser Support
- Modals work across all modern browsers
- Fixed positioning is well-supported
- Focus management works with assistive technologies
- Body scroll lock is reliable
- Z-index stacking works consistently

### Performance
- Modals render only when open
- Body scroll lock has minimal performance impact
- Focus management is efficient
- Portal rendering doesn't affect performance
- Consider lazy loading for heavy modal content

### Focus Management
- Focus moves to modal when opened
- Focus is trapped within modal
- Focus returns to trigger when closed
- First focusable element receives focus
- Escape key closes modal
- Tab order is logical within modal

## Common Patterns

### Confirmation Dialog
Common pattern for confirming actions.

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

### Form Modal
For focused form interactions.

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

## Validation

### Visual Validation
- Modal displays correctly when opened
- Backdrop dims background appropriately
- Content is readable and well-spaced
- Close button is visible and functional
- Modal is centered on screen

### Functional Validation
- Modal opens and closes correctly
- Backdrop click closes modal (if enabled)
- Escape key closes modal (if closable)
- Focus is trapped within modal
- Body scroll is disabled when open
- Focus returns to trigger when closed

### Accessibility Validation
- ARIA attributes are properly set
- Screen readers announce modal opening
- Keyboard navigation works correctly
- Focus indicators are visible
- Modal is properly announced
- Background content is hidden from screen readers
