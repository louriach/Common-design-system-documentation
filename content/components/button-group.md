---
title: Button Group
description: Container component for organizing related action buttons together
category: Actions
---

## Overview

Button groups bring together related action buttons in a single visual unit. They create logical connections between actions that work together, making interfaces more organized and easier to scan. Common scenarios include form submission flows, toolbar collections, and filter sets where multiple options need to appear as a cohesive set.

## Usage

### Basic Button Group
```tsx:live
<div>
  <Button variant="ghost">Reset</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Save</Button>
</div>
```

### Primary Action Group
```tsx:live
<div>
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Submit</Button>
</div>
```

### Form Actions
```tsx:live
<div>
  <Button variant="ghost">Preview</Button>
  <Button variant="outline">Discard</Button>
  <Button variant="default">Save Changes</Button>
</div>
```

## Props

Button groups contain individual Button components. Each button supports these standard properties:

- `variant`: "default" | "secondary" | "outline" | "ghost" - Visual style of the button
- `size`: "sm" | "md" | "lg" - Size of the button
- `disabled`: boolean - Disables the button
- `children`: React.ReactNode - Button label text or content

## States

### Default
All buttons appear in their standard interactive state when the group is in default mode.

**Visual characteristics:**
- Buttons arranged side-by-side with uniform gaps
- Each button retains its chosen style variant
- Proximity creates a clear visual relationship

### Disabled
Any button in the group can be disabled independently while others stay active.

**Visual characteristics:**
- Disabled buttons appear faded
- Disabled buttons cannot be clicked
- Active buttons continue to function normally

### Focus
Keyboard users can move focus between buttons one at a time.

**Visual characteristics:**
- Focused button shows a visible outline
- Only one button has focus at any moment
- Tab key moves focus in the same order as visual layout

## Use Cases

### Form Actions
Combine primary and secondary form actions in one location (e.g., Save, Cancel, Reset).

**Example:**
- Save (primary action)
- Cancel (secondary action)
- Reset (tertiary action)

### Toolbar Actions
Collect related toolbar functions in one place (e.g., Edit, Delete, Share).

**Example:**
- Edit
- Delete
- Share
- More options

### Filter Controls
Present filter or view options as a unified set (e.g., All, Active, Archived).

**Example:**
- All
- Active
- Archived
- Draft

### Navigation Actions
Combine related navigation or workflow steps.

**Example:**
- Previous
- Next
- Skip

## Anatomy

Button groups include three main elements:

1. **Container** - The wrapper that visually connects the buttons
2. **Buttons** - Individual button components, each with its own style and state
3. **Spacing** - Uniform gaps between buttons that reinforce the grouping

## Accessibility

### Keyboard Navigation
- Tab key moves focus to each button in sequence
- Enter or Space triggers the focused button
- Focus order follows the visual layout
- Focus indicators must be easy to see

### Screen Reader Support
- Every button has a unique accessible name
- Screen readers announce each button separately
- Icon-only buttons need `aria-label` attributes
- Optional `aria-labelledby` can describe the entire group

### Visual Requirements
- Interactive areas must be at least 24×24 pixels
- Text must have at least 4.5:1 contrast with background
- Text must be readable when zoomed to 200%
- Spacing and alignment make the grouping obvious

### Best Practices
- Only group actions that are truly related
- Keep groups small, ideally 3-4 buttons maximum
- Prefer default and secondary styles; use primary sparingly
- Don't mix text buttons with icon-only buttons
- Use segmented controls or radio buttons for selection, not button groups
- Don't replace tab navigation with button groups

## Content Guidelines

### Button Labels
- Choose verbs that clearly describe the action
- Keep labels short, typically 1-3 words
- Use the same terminology style across related buttons
- Make button importance match label prominence

### Grouping Logic
- Group buttons that accomplish related tasks
- Group buttons that appear in the same workflow step
- Don't group buttons just because they're positioned nearby
- Think about how users will move through the workflow

### Action Ordering
- Place primary actions on the right in LTR interfaces (left in RTL)
- Place secondary actions (like Cancel) on the left in LTR interfaces (right in RTL)
- This follows natural reading flow and matches user expectations
- The most important action should be in the position where users naturally finish reading

## Best Practices

### When to Use
- Multiple related actions appear in the same area
- Form submission and cancellation need to be together
- Toolbar or action bar needs organization
- Filter or view options should be presented together
- Related workflow steps need to be grouped

### When Not to Use
- Only one primary action exists (use a single button)
- Selection between options is needed (use segmented control or radio buttons)
- Moving between different pages (use tabs or navigation menu)
- Actions are unrelated but happen to be positioned together
- Too many buttons would be in the group (keep to 3-4 maximum)

### Design Considerations
- Keep spacing between buttons uniform
- Use button styles to show importance hierarchy
- Align buttons consistently (top, center, or bottom edges)
- Plan for smaller screens (buttons may wrap to new lines)
- Keep visual weight balanced across the group
- **Primary action placement**: In left-to-right (LTR) interfaces, place the primary action on the right side of the button group. In right-to-left (RTL) interfaces, place the primary action on the left side. This follows natural reading flow and user expectations.

## Related Components

- **Button** - The individual button component used within groups
- **Segmented Control** - For choosing between mutually exclusive options
- **Toolbar** - For organizing multiple action groups
- **Card** - Frequently contains button groups for actions

## Technical Considerations

### Implementation
- Button groups usually use flexbox for layout
- Horizontal arrangement is standard, though vertical layouts work too
- Maintain consistent gaps between buttons (usually 8-16 pixels)
- Each button keeps its own behavior and state management

### Responsive Design
- Groups may wrap to multiple rows on narrow screens
- Consider vertical stacking on mobile devices
- Maintain adequate touch target sizes (at least 44×44 pixels on mobile)
- Ensure buttons stay usable across all screen sizes

### Performance
- Button groups have negligible performance overhead
- Each button manages its own event listeners
- Buttons don't share state unless you build that explicitly

## Common Patterns

### Form Actions Pattern
The most frequent pattern: Primary action (Save/Submit) paired with secondary actions (Cancel/Reset). Primary action is placed on the right in LTR interfaces.

```tsx:live
<div>
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Save Changes</Button>
</div>
```

### Three-Action Pattern
Primary, secondary, and tertiary actions presented together. Primary action is placed on the right in LTR interfaces.

```tsx:live
<div>
  <Button variant="ghost">Delete</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="default">Publish</Button>
</div>
```

### Filter Pattern
Multiple filter choices presented as a unified set.

```tsx:live
<div>
  <Button variant="outline">All</Button>
  <Button variant="outline">Active</Button>
  <Button variant="outline">Archived</Button>
</div>
```

## Validation

### Visual Validation
- Buttons appear as a clear visual unit with consistent spacing
- Button styles establish a clear importance order
- Group maintains proper alignment and visual balance
- Spacing remains uniform across all buttons

### Functional Validation
- Each button operates independently
- Keyboard navigation functions correctly
- Focus indicators are clearly visible
- Disabled states behave as expected
- Touch targets meet minimum size standards

### Accessibility Validation
- Every button has a descriptive accessible name
- Keyboard navigation follows a logical sequence
- Focus indicators meet contrast standards
- Screen readers announce buttons appropriately
- Labels meet minimum contrast requirements
