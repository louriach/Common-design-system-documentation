---
title: Tooltip
description: Contextual help component that displays additional information on hover or focus
category: Feedback
---

## Overview

Tooltip components show helpful information when people hover over or focus on an element. They provide contextual guidance without cluttering the interface, appearing near the element that triggered them. Tooltips work well for explaining icons, providing additional details, and offering hints about functionality.

## Usage

### Basic Tooltip
```tsx:live
<Tooltip content="Click to save your changes">
  <Button>Save</Button>
</Tooltip>
```

### Tooltip with Icon
```tsx:live
<Tooltip content="This feature is coming soon">
  <IconButton aria-label="Coming soon">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
</Tooltip>
```

### Tooltip Placement
```tsx:live
<div className="flex gap-4 items-center">
  <Tooltip content="Top tooltip" placement="top">
    <Button variant="outline">Top</Button>
  </Tooltip>
  <Tooltip content="Right tooltip" placement="right">
    <Button variant="outline">Right</Button>
  </Tooltip>
  <Tooltip content="Bottom tooltip" placement="bottom">
    <Button variant="outline">Bottom</Button>
  </Tooltip>
  <Tooltip content="Left tooltip" placement="left">
    <Button variant="outline">Left</Button>
  </Tooltip>
</div>
```

### Tooltip on Disabled Element
```tsx:live
<Tooltip content="This feature requires a premium account">
  <Button disabled>Premium Feature</Button>
</Tooltip>
```

## Props

- `content`: string - **Required** - Text content displayed in the tooltip
- `children`: ReactNode - **Required** - Element that triggers the tooltip
- `placement`: "top" | "bottom" | "left" | "right" - Position relative to trigger (default: "top")
- `delay`: number - Delay in milliseconds before showing tooltip (default: 200)
- `disabled`: boolean - Disables the tooltip (default: false)

## States

### Hidden
The tooltip is not visible and does not affect layout.

**Visual characteristics:**
- Tooltip is not rendered
- No visual indication
- No impact on page layout
- Trigger element appears normal

### Visible
The tooltip appears when the trigger element is hovered or focused.

**Visual characteristics:**
- Tooltip appears near trigger element
- Dark background with light text
- Arrow points to trigger element
- Smooth fade-in animation
- Positioned based on placement prop

### Hover
When hovering over the trigger element, the tooltip appears after a short delay.

**Visual characteristics:**
- Cursor may change to indicate interactivity
- Tooltip appears after delay
- Tooltip remains visible while hovering
- Tooltip disappears when mouse leaves

### Focus
When the trigger element receives keyboard focus, the tooltip appears.

**Visual characteristics:**
- Focus indicator on trigger element
- Tooltip appears immediately or after delay
- Tooltip remains visible while focused
- Tooltip disappears when focus moves away

## Use Cases

### Icon Explanations
Use tooltips to explain what icons mean, especially for icon-only buttons.

**Example:**
- Icon button labels
- Status icon meanings
- Action button descriptions
- Navigation icon explanations

### Additional Information
Use tooltips to provide extra details without cluttering the interface.

**Example:**
- Field descriptions
- Feature explanations
- Helpful hints
- Contextual guidance

### Disabled State Explanations
Use tooltips to explain why elements are disabled.

**Example:**
- Disabled button reasons
- Feature requirements
- Permission explanations
- Upgrade prompts

### Form Help
Use tooltips to provide guidance on form fields.

**Example:**
- Input format examples
- Validation requirements
- Field purpose explanations
- Data format hints

## Anatomy

Tooltip components include these elements:

1. **Trigger Element** - The element that activates the tooltip
2. **Tooltip Container** - Wrapper that positions the tooltip
3. **Tooltip Content** - Text displayed in the tooltip
4. **Arrow** - Visual indicator pointing to trigger element
5. **Backdrop** - Optional overlay (not used in basic tooltip)

## Accessibility

### Keyboard Navigation
- Tooltips appear on focus for keyboard users
- Focus indicators must be clearly visible
- Tooltip content is accessible to screen readers
- Keyboard users can access tooltip information
- Tab order is not affected by tooltips

### Screen Reader Support
- Tooltip uses `role="tooltip"` attribute
- Content is announced when tooltip appears
- Trigger element should have descriptive text or aria-label
- Tooltip content supplements, not replaces, accessible names
- Screen readers announce tooltip on focus

### Visual Requirements
- Tooltip text must have at least 4.5:1 contrast with background
- Tooltip must be clearly visible against background
- Arrow must be visible and point correctly
- Tooltip must not obscure important content
- Placement should avoid covering trigger element

### Best Practices
- Keep tooltip text concise (1-2 sentences)
- Use tooltips to supplement, not replace, visible text
- Ensure tooltips are accessible to keyboard users
- Test tooltip placement on various screen sizes
- Avoid tooltips on mobile (use different pattern)
- Don't put critical information only in tooltips

## Content Guidelines

### Text Content
- Keep text brief and scannable
- Use clear, simple language
- Focus on actionable information
- Avoid redundant information
- Match tone to interface context

### Placement
- Choose placement that doesn't obscure content
- Consider available space
- Avoid covering important elements
- Test on different screen sizes
- Adjust placement for edge cases

## Best Practices

### When to Use
- For explaining icons or symbols
- For providing additional context
- For explaining disabled states
- For form field guidance
- For feature hints and tips

### When Not to Use
- For critical information (make it visible)
- For long explanations (use Modal or separate page)
- For primary content (use regular text)
- On mobile devices (use different pattern)
- For interactive content (use Popover)

### Design Considerations
- Keep tooltip text concise
- Choose appropriate placement
- Ensure sufficient contrast
- Test with various content lengths
- Consider mobile alternatives
- Avoid tooltip overload

## Related Components

- **Popover** - For interactive content in overlays
- **Modal** - For important information requiring attention
- **Alert** - For non-dismissible messages
- **Badge** - Often used with tooltips for additional info

## Technical Considerations

### Implementation
- Tooltips use absolute positioning
- Delay prevents accidental triggers
- Arrow is created with CSS borders
- Animation provides smooth appearance
- Z-index ensures tooltip appears above content
- Mouse events handle show/hide logic

### Browser Support
- Tooltips work across all modern browsers
- CSS positioning is well-supported
- Animation support is consistent
- Event handling works reliably
- Z-index stacking works correctly

### Performance
- Tooltips render only when visible
- Minimal performance impact
- Event handlers are efficient
- No layout shifts when tooltip appears
- Smooth animations don't affect performance

### Mobile Considerations
- Tooltips may not work well on touch devices
- Consider alternative patterns for mobile
- Hover doesn't exist on touch screens
- May need tap-to-show pattern
- Test thoroughly on mobile devices

## Common Patterns

### Icon Button Tooltip
Common pattern for icon-only buttons.

```tsx:live
<Tooltip content="Delete item">
  <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Delete">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </button>
</Tooltip>
```

### Form Field Help
For providing guidance on form inputs.

```tsx:live
<div className="flex items-center gap-2">
  <Input label="Username" placeholder="Enter username" />
  <Tooltip content="Username must be 3-20 characters, letters and numbers only">
    <button className="p-1 text-gray-400 hover:text-gray-600" aria-label="Help">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  </Tooltip>
</div>
```

## Validation

### Visual Validation
- Tooltip displays correctly when triggered
- Placement is accurate relative to trigger
- Arrow points to trigger element
- Text is readable and well-spaced
- Animation is smooth

### Functional Validation
- Tooltip appears on hover
- Tooltip appears on focus
- Tooltip disappears when mouse leaves
- Tooltip disappears when focus moves
- Delay works correctly
- Disabled state prevents tooltip

### Accessibility Validation
- Tooltip is announced by screen readers
- Keyboard users can access tooltip
- Focus indicators are visible
- ARIA attributes are properly set
- Tooltip doesn't interfere with navigation
