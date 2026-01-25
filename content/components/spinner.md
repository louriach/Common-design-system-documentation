---
title: Spinner
description: Loading indicator component for showing ongoing processes without specific progress
category: Feedback
---

## Overview

Spinner components indicate that a process is ongoing when completion time or progress cannot be determined. They provide visual feedback that the system is working, helping users understand they should wait. Spinners work well for data fetching, initial page loads, and any operation where progress cannot be measured but activity is happening.

## Usage

### Basic Spinner
```tsx:live
<Spinner />
```

### Spinner Sizes
```tsx:live
<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
```

### Spinner Variants
```tsx:live
<div className="flex items-center gap-4">
  <Spinner variant="default" />
  <Spinner variant="primary" />
  <Spinner variant="secondary" />
</div>
```

### Spinner in Button
```tsx:live
<Button disabled>
  <Spinner size="sm" className="mr-2" />
  Loading...
</Button>
```

### Spinner in Container
```tsx:live
<div className="flex items-center justify-center p-8">
  <Spinner size="lg" />
</div>
```

## Props

- `size`: "sm" | "md" | "lg" - Size of the spinner (default: "md")
- `variant`: "default" | "primary" | "secondary" - Color variant (default: "default")
- `className`: string - Additional CSS classes

## States

### Spinning
The spinner is actively rotating, indicating ongoing activity.

**Visual characteristics:**
- Continuous rotation animation
- Circular border with partial fill
- Smooth, consistent animation
- Visible against background
- Indicates active processing

### Static
The spinner is not animating (typically not used in this state).

**Visual characteristics:**
- No rotation
- Static appearance
- Usually hidden when not needed
- May indicate error state

## Use Cases

### Data Loading
Use spinners when fetching data from APIs or databases.

**Example:**
- Initial page loads
- Data table loading
- Search results loading
- Content fetching

### Form Processing
Use spinners during form submission when progress cannot be measured.

**Example:**
- Form submission
- Authentication processing
- Quick save operations
- Validation processing

### Content Loading
Use spinners when loading content without specific progress.

**Example:**
- Image loading
- Component loading
- Route transitions
- Lazy-loaded content

### Background Operations
Use spinners for operations happening in the background.

**Example:**
- Background sync
- Cache updates
- Notification processing
- Data synchronization

## Anatomy

Spinner components include these elements:

1. **Circle** - Outer circular border
2. **Arc** - Partial fill indicating rotation
3. **Animation** - Continuous rotation effect
4. **Container** - Optional wrapper for positioning

## Accessibility

### Keyboard Navigation
- Spinners are not directly interactive
- Focus management for associated controls
- Keyboard users can see spinner state
- Spinner doesn't interfere with navigation

### Screen Reader Support
- Spinner uses `role="status"` attribute
- `aria-label="Loading"` provides accessible name
- Screen readers announce loading state
- Hidden text provides additional context
- Loading state is clearly communicated

### Visual Requirements
- Spinner must be clearly visible
- Colors must have sufficient contrast
- Animation must be smooth
- Size must be appropriate for context
- Must not cause motion sensitivity issues

### Best Practices
- Always provide accessible labels
- Use appropriate size for context
- Ensure spinner is visible
- Don't use for operations over 3 seconds (consider Progress)
- Provide loading text when helpful
- Consider motion sensitivity preferences

## Content Guidelines

### Placement
- Center spinner in loading area
- Position near relevant content
- Don't obscure important information
- Consider overlay for full-page loading
- Use inline for component-level loading

### Size
- Choose size appropriate for context
- Larger for full-page loading
- Smaller for inline or button loading
- Ensure visibility on all screen sizes
- Test with various backgrounds

## Best Practices

### When to Use
- For indeterminate loading states
- When progress cannot be measured
- For quick operations (under 3 seconds)
- For data fetching
- For initial page loads

### When Not to Use
- For operations with measurable progress (use Progress)
- For very long operations (consider Progress with estimate)
- When operation time is known (use Progress)
- For operations over 5 seconds (consider Progress)
- When progress percentage is available

### Design Considerations
- Choose appropriate size for context
- Ensure spinner is visible
- Use variants to match design system
- Consider motion sensitivity
- Test with various backgrounds
- Provide loading text when helpful

## Related Components

- **Progress** - For operations with measurable progress
- **Alert** - For completion or error messages
- **Button** - Often contains spinner during loading
- **Modal** - May show spinner during processing

## Technical Considerations

### Implementation
- Spinners use CSS animations for rotation
- Border-based design creates circular appearance
- Partial border creates arc effect
- Smooth animation provides visual feedback
- ARIA attributes ensure accessibility
- Size and variant classes provide flexibility

### Browser Support
- CSS animations work across all modern browsers
- Border styling is well-supported
- Animation performance is consistent
- ARIA attributes are supported
- Rotation animations are smooth

### Performance
- Spinners are lightweight
- CSS animations are performant
- No JavaScript required for animation
- Minimal impact on page performance
- Efficient rendering

### Animation
- Smooth, continuous rotation
- Consistent animation speed
- No jank or stuttering
- Works well with reduced motion preferences
- Considerate of motion sensitivity

## Common Patterns

### Button Loading
Common pattern for loading states in buttons.

```tsx:live
<Button disabled>
  <Spinner size="sm" className="mr-2" />
  Processing...
</Button>
```

### Full Page Loading
For initial page or route loading.

```tsx:live
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <Spinner size="lg" className="mx-auto mb-4" />
    <p className="text-gray-600 dark:text-gray-400">Loading...</p>
  </div>
</div>
```

### Inline Loading
For component-level loading states.

```tsx:live
<div className="flex items-center gap-2">
  <Spinner size="sm" />
  <span className="text-sm text-gray-600 dark:text-gray-400">Loading data...</span>
</div>
```

## Validation

### Visual Validation
- Spinner displays correctly
- Animation is smooth and continuous
- Sizes render at correct dimensions
- Variants show correct colors
- Spinner is visible against background

### Functional Validation
- Animation works correctly
- Sizes apply correctly
- Variants apply correct styling
- Spinner appears when needed
- Spinner hides when loading completes

### Accessibility Validation
- ARIA attributes are properly set
- Screen readers announce loading state
- Spinner doesn't interfere with navigation
- Loading state is accessible
- Motion is considerate of preferences
