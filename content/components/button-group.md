---
title: Button Group
description: Container component for organizing related action buttons together
category: Actions
---

## Overview

Button group component organizes related action buttons together to save horizontal space and improve visual organization. Button groups are ideal for displaying multiple closely-related actions, such as form actions (Save, Cancel, Reset), filter options, or toolbar actions. They help users understand the relationship between actions and create a more cohesive interface.

## Usage

### Basic Button Group
```tsx:live
<div>
  <Button variant="default">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Reset</Button>
</div>
```

### Primary Action Group
```tsx:live
<div>
  <Button variant="default">Submit</Button>
  <Button variant="outline">Cancel</Button>
</div>
```

### Multiple Variants
```tsx:live
<div>
  <Button variant="default">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>
```

### Button Group with Sizes
```tsx:live
<div>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

### Button Group with Disabled State
```tsx:live
<div>
  <Button variant="default">Save</Button>
  <Button variant="outline" disabled>Cancel</Button>
  <Button variant="ghost">Reset</Button>
</div>
```

### Form Actions
```tsx:live
<div>
  <Button variant="default">Save Changes</Button>
  <Button variant="outline">Discard</Button>
  <Button variant="ghost">Preview</Button>
</div>
```

## Props

Button groups are composed of individual Button components. Each button accepts the standard Button props:

- `variant`: "default" | "secondary" | "outline" | "ghost" - Visual style of the button
- `size`: "sm" | "md" | "lg" - Size of the button
- `disabled`: boolean - Disables the button
- `children`: React.ReactNode - Button label text or content

## States

### Default
The default state displays all buttons in their normal, interactive state.

**Visual indicators:**
- Buttons displayed horizontally with consistent spacing
- Each button maintains its individual variant styling
- Clear visual grouping through proximity

### Disabled
Individual buttons within a group can be disabled while others remain active.

**Visual indicators:**
- Disabled button shows reduced opacity
- Disabled button is not interactive
- Other buttons in the group remain fully functional

### Focus
When navigating with keyboard, each button receives focus independently.

**Visual indicators:**
- Focus ring appears on the focused button
- Only one button has focus at a time
- Tab navigation moves between buttons in visual order

## Use Cases

### Form Actions
Group primary and secondary form actions together (e.g., Save, Cancel, Reset).

**Example:**
- Save (primary action)
- Cancel (secondary action)
- Reset (tertiary action)

### Toolbar Actions
Organize related toolbar functions (e.g., Edit, Delete, Share).

**Example:**
- Edit
- Delete
- Share
- More options

### Filter Controls
Group filter or view options together (e.g., All, Active, Archived).

**Example:**
- All
- Active
- Archived
- Draft

### Navigation Actions
Group related navigation or workflow actions.

**Example:**
- Previous
- Next
- Skip

## Anatomy

Button groups consist of:

1. **Container** - Wrapper element that groups buttons visually
2. **Buttons** - Individual button components with their own variants and states
3. **Spacing** - Consistent gap between buttons for visual cohesion

## Accessibility

### Keyboard Navigation
- Each button receives focus via Tab key
- Enter or Space activates the focused button
- Buttons focus in logical (visual) order
- Focus indicators must be clearly visible

### Screen Reader Support
- Each button has its own accessible name
- Buttons are announced individually by screen readers
- Use `aria-label` for icon-only buttons
- Group label can be provided with `aria-labelledby` if needed

### Visual Requirements
- Minimum 24×24 CSS pixel target size for touch targets
- Label text must meet 4.5:1 contrast ratio
- Labels must remain legible at 200% zoom
- Clear visual grouping through spacing and alignment

### Best Practices
- Group only related actions together
- Limit to 3-4 buttons per group for usability
- Use primarily default/secondary variants; limit primary buttons to one per group
- Avoid mixing text-labeled buttons with icon-only buttons
- Don't use button groups for selection (use segmented controls or radio buttons instead)
- Don't use as replacement for tab navigation

## Content Guidelines

### Button Labels
- Use clear, action-oriented verbs
- Keep labels concise (1-3 words)
- Use consistent terminology across related buttons
- Match button importance to label prominence

### Grouping Logic
- Group buttons that perform related actions
- Group buttons that appear in the same context
- Avoid grouping just because buttons are close together
- Consider user workflow when organizing actions

## Best Practices

### When to Use
- Multiple related actions in the same context
- Form submission and cancellation actions
- Toolbar or action bar scenarios
- Filter or view toggle options
- Related workflow navigation

### When Not to Use
- Single primary action (use standalone button)
- Selection controls (use segmented control or radio buttons)
- Navigation between pages (use tabs or navigation menu)
- Unrelated actions that happen to be near each other
- Too many buttons (limit to 3-4 per group)

### Design Considerations
- Maintain consistent spacing between buttons
- Use appropriate button variants to indicate hierarchy
- Ensure buttons align properly (top, center, or bottom)
- Consider responsive behavior (wrap to multiple lines if needed)
- Maintain visual balance and hierarchy

## Related Components

- **Button** - Individual button component used within groups
- **Segmented Control** - For selection between mutually exclusive options
- **Toolbar** - For organizing multiple action groups
- **Card** - Often contains button groups for actions

## Design System Examples

### Material Design
Material Design uses button groups for related actions, typically with a primary action and secondary actions.

### Ant Design
Ant Design provides Button.Group component with options for size, orientation, and spacing.

### Chakra UI
Chakra UI uses ButtonGroup component with props for spacing, size, and variant consistency.

### Base UI
Base UI provides ButtonGroup with support for orientation, spacing, and disabled states.

## Technical Considerations

### Implementation
- Button groups are typically implemented as flex containers
- Horizontal layout is most common, but vertical stacking is possible
- Spacing between buttons should be consistent (typically 8-16px)
- Buttons should maintain their individual functionality and states

### Responsive Design
- Button groups can wrap to multiple lines on smaller screens
- Consider stacking vertically on mobile devices
- Maintain touch target sizes (minimum 44×44px on mobile)
- Ensure buttons remain accessible and usable at all screen sizes

### Performance
- Button groups have minimal performance impact
- Each button maintains its own event handlers
- No shared state between buttons (unless explicitly implemented)

## Common Patterns

### Form Actions Pattern
Most common pattern: Primary action (Save/Submit) with secondary actions (Cancel/Reset).

```tsx:live
<div>
  <Button variant="default">Save Changes</Button>
  <Button variant="outline">Cancel</Button>
</div>
```

### Three-Action Pattern
Primary action, secondary action, and tertiary action grouped together.

```tsx:live
<div>
  <Button variant="default">Publish</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="ghost">Delete</Button>
</div>
```

### Filter Pattern
Multiple filter options grouped together for easy access.

```tsx:live
<div>
  <Button variant="outline">All</Button>
  <Button variant="outline">Active</Button>
  <Button variant="outline">Archived</Button>
</div>
```

## Validation

### Visual Validation
- Buttons are visually grouped with consistent spacing
- Button variants create clear hierarchy
- Group maintains alignment and balance
- Spacing is consistent across all buttons

### Functional Validation
- Each button functions independently
- Keyboard navigation works correctly
- Focus indicators are visible
- Disabled states work as expected
- Touch targets meet minimum size requirements

### Accessibility Validation
- All buttons have accessible names
- Keyboard navigation is logical
- Focus indicators meet contrast requirements
- Screen readers announce buttons correctly
- Labels meet contrast ratio requirements
