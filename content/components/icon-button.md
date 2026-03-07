---
title: Icon Button
description: Square button component designed specifically for displaying icons without text labels
category: Actions
---

## Overview

Icon buttons provide a compact way to trigger actions using visual symbols instead of text. They conserve screen space while maintaining clear functionality through recognizable icons. Icon buttons are essential for toolbars, navigation menus, and interfaces where space is limited or where actions are best represented visually.

## Usage

### Basic Icon Button
```tsx:live
<IconButton aria-label="Add item">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</IconButton>
```

### Default Icon Button
```tsx:live
<IconButton variant="default" aria-label="Save">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
</IconButton>
```

### Destructive Icon Button
```tsx:live
<IconButton variant="destructive" aria-label="Delete">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
</IconButton>
```

### Secondary Icon Button
```tsx:live
<IconButton variant="secondary" aria-label="Edit">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
</IconButton>
```

### Outline Icon Button
```tsx:live
<IconButton variant="outline" aria-label="Download">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
</IconButton>
```

### Ghost Icon Button
```tsx:live
<IconButton variant="ghost" aria-label="Settings">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</IconButton>
```

### Icon Button Sizes
```tsx:live
<div className="flex gap-4 items-center">
  <IconButton size="sm" aria-label="Small button">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
  <IconButton size="md" aria-label="Medium button">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
  <IconButton size="lg" aria-label="Large button">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </IconButton>
</div>
```

### Disabled Icon Button
```tsx:live
<IconButton disabled aria-label="Disabled action">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</IconButton>
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| variant | `"default" \| "destructive" \| "secondary" \| "outline" \| "ghost"` | Visual style variant (default: "default"). |
| size | `"sm" \| "md" \| "lg"` | Button size (default: "md"). |
| aria-label | `string` | **Required.** Accessible label describing the button's action. |
| disabled | `boolean` | Disables the button (default: false). |
| onClick | `function` | Click event handler. |
| className | `string` | Additional CSS classes. |

## States

### Default
The icon button appears in its normal, interactive state.

**Visual characteristics:**
- Square shape with equal width and height
- Icon centered within the button
- Transparent or subtle background
- Cursor changes to pointer on hover
- Standard text/icon color

### Hover
When hovering over the icon button, it provides visual feedback.

**Visual characteristics:**
- Background color changes
- Smooth transition animation
- Cursor remains pointer
- Icon remains clearly visible

### Focus
When the icon button receives keyboard focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the button
- Ring uses blue color
- Clear visual indication of focus
- Keyboard navigation is supported

### Active
When the icon button is pressed, it shows an active state.

**Visual characteristics:**
- Background may darken slightly
- Provides tactile feedback
- Returns to hover state when released

### Disabled
When the icon button is disabled, it appears non-interactive.

**Visual characteristics:**
- Reduced opacity
- No hover effects
- Cursor changes to not-allowed
- Icon remains visible but dimmed

## Use Cases

### Toolbar Actions
Use icon buttons in toolbars for common actions like save, delete, or edit.

**Example:**
- Text editor toolbars
- Image editing interfaces
- Document management systems
- Code editor actions

### Navigation
Use icon buttons for navigation elements that don't require text labels.

**Example:**
- Sidebar navigation
- Header menu toggles
- Breadcrumb navigation
- Pagination controls

### Data Actions
Use icon buttons for row-level actions in tables or lists.

**Example:**
- Table row actions
- List item controls
- Card action buttons
- Grid item operations

### Compact Interfaces
Use icon buttons when screen space is limited or when actions are secondary.

**Example:**
- Mobile interfaces
- Dense data displays
- Overlay controls
- Floating action areas

## Anatomy

Icon button components include these elements:

1. **Container** - Square button element with equal dimensions
2. **Icon** - SVG or icon component centered within the button
3. **Focus Ring** - Visible indicator when button receives keyboard focus
4. **Background** - Optional background color that changes on interaction

## Accessibility

### Keyboard Navigation
- Tab key moves focus to icon buttons
- Enter or Space activates the button
- Focus indicators must be clearly visible
- Keyboard navigation works consistently
- Focus order follows logical reading order

### Screen Reader Support
- `aria-label` is required for all icon buttons
- Button is announced with its accessible name
- Action is clearly described in the label
- Avoid generic labels like "button" or "icon"
- Use descriptive labels that indicate the action

### Visual Requirements
- Icon buttons must have at least 44×44 pixels touch target
- Focus indicators must meet contrast requirements
- Hover states must be clearly visible
- Icons must be distinguishable from background
- Minimum icon size of 16×16 pixels recommended

### Best Practices
- Always provide descriptive `aria-label`
- Ensure sufficient contrast for icons
- Use consistent iconography across interface
- Provide tooltips for additional context
- Test with screen readers
- Ensure touch targets meet minimum size requirements

## Content Guidelines

### Icon Selection
- Use universally recognized icons when possible
- Maintain consistent icon style throughout interface
- Choose icons that clearly represent their actions
- Avoid ambiguous or confusing symbols
- Test icon recognition with users

### Labeling
- Use clear, action-oriented labels
- Describe what will happen when clicked
- Keep labels concise but descriptive
- Match label to icon meaning
- Avoid redundant information

### Context
- Place icon buttons in logical locations
- Group related actions together
- Use consistent placement patterns
- Consider user workflow when positioning
- Provide visual hierarchy through variants

## Best Practices

### When to Use
- For actions that are clearly represented by icons
- When screen space is limited
- For secondary or tertiary actions
- In toolbars and action bars
- For frequently used commands

### When Not to Use
- For primary call-to-action buttons (use Button with text)
- When icon meaning is unclear (use Button with text)
- For critical actions that need explicit labels
- When users might not recognize the icon
- For actions that require explanation

### Design Considerations
- Maintain consistent sizing across interface
- Use appropriate variant for context
- Ensure icons are clearly visible
- Provide adequate spacing between buttons
- Consider touch target sizes on mobile
- Test icon recognition with target users

## Related Components

- **Button** - For actions with text labels
- **Tooltip** - Often used with icon buttons for additional context
- **Badge** - Can be combined with icon buttons for notifications
- **Menu** - Icon buttons often trigger menu components

## Technical Considerations

### Implementation
- Icon buttons use semantic HTML `<button>` elements
- Square dimensions ensure consistent appearance
- Icons are centered using flexbox
- Variants provide visual flexibility
- Focus management ensures keyboard accessibility

### Browser Support
- Icon buttons work across all modern browsers
- Focus indicators are well-supported
- Keyboard navigation is consistent
- Touch events work on mobile devices
- CSS transitions are smooth

### Performance
- Icon buttons are lightweight and render quickly
- No additional JavaScript required for basic functionality
- SVG icons scale without quality loss
- Minimal performance impact
- Efficient event handling

### Mobile Considerations
- Ensure minimum 44×44 pixel touch targets
- Test hover states on touch devices
- Consider tap feedback for mobile
- Icons should be clearly visible on small screens
- Spacing between buttons should accommodate touch

## Common Patterns

### Toolbar Group
Common pattern for grouping related icon buttons.

```tsx:live
<div className="flex gap-2">
  <IconButton aria-label="Bold">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
    </svg>
  </IconButton>
  <IconButton aria-label="Italic">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  </IconButton>
  <IconButton aria-label="Underline">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </IconButton>
</div>
```

### With Tooltip
Icon buttons often work well with tooltips for additional context.

```tsx:live
<Tooltip content="Delete item">
  <IconButton variant="ghost" aria-label="Delete">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </IconButton>
</Tooltip>
```

## Validation

### Visual Validation
- Icon buttons display correctly with appropriate styling
- Variants are visually distinct
- Hover states provide clear feedback
- Focus indicators are visible
- Icons are properly centered

### Functional Validation
- Click events fire correctly
- Keyboard navigation works properly
- Focus indicators appear on focus
- Disabled state prevents interaction
- All variants render correctly

### Accessibility Validation
- Icon buttons are announced correctly by screen readers
- Keyboard navigation works properly
- Focus indicators meet contrast requirements
- `aria-label` is present and descriptive
- Touch targets meet minimum size requirements
