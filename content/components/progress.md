---
title: Progress
description: Visual indicator component showing completion status or loading progress
category: Feedback
---

## Overview

Progress components show how far along a process has completed, giving people a sense of advancement and estimated time remaining. They provide visual feedback for operations that take time, helping users understand that the system is working and how much work remains. Progress bars work well for file uploads, form submissions, data processing, and any task with measurable completion.

## Usage

### Basic Progress
```tsx:live
<Progress value={45} />
```

### Progress with Label
```tsx:live
<Progress value={75} showLabel />
```

### Progress Variants
```tsx:live
<div className="space-y-4">
  <Progress value={60} variant="default" showLabel />
  <Progress value={80} variant="success" showLabel />
  <Progress value={40} variant="warning" showLabel />
  <Progress value={20} variant="error" showLabel />
</div>
```

### Progress Sizes
```tsx:live
<div className="space-y-4">
  <Progress value={50} size="sm" />
  <Progress value={50} size="md" />
  <Progress value={50} size="lg" />
</div>
```

### Indeterminate Progress
```tsx:live
<Progress value={0} showLabel />
```

## Props

- `value`: number - Current progress value (0 to max, default: 0)
- `max`: number - Maximum value representing 100% (default: 100)
- `showLabel`: boolean - Shows percentage label above progress bar (default: false)
- `size`: "sm" | "md" | "lg" - Height of the progress bar (default: "md")
- `variant`: "default" | "success" | "warning" | "error" - Color variant (default: "default")
- `className`: string - Additional CSS classes

## States

### Empty
The progress bar shows no completion (value is 0).

**Visual characteristics:**
- Bar appears empty or at 0%
- Background track is visible
- No fill color shown
- Label shows 0% (if label is shown)

### In Progress
The progress bar shows partial completion.

**Visual characteristics:**
- Bar fills proportionally to value
- Fill color indicates progress
- Smooth animation as value changes
- Label updates dynamically (if shown)

### Complete
The progress bar shows 100% completion.

**Visual characteristics:**
- Bar is fully filled
- Fill reaches end of track
- Label shows 100% (if label is shown)
- May use success variant for completion

### Indeterminate
The progress bar shows activity without specific progress value.

**Visual characteristics:**
- Value remains at 0 or undefined
- May show animated indicator
- Indicates ongoing process
- No specific completion percentage

## Use Cases

### File Uploads
Use progress bars to show upload progress for files.

**Example:**
- Document uploads
- Image uploads
- Video uploads
- Batch file processing

### Form Submissions
Use progress bars during form processing and submission.

**Example:**
- Multi-step form progress
- Data validation progress
- Submission processing
- Save operations

### Data Processing
Use progress bars for operations that process data.

**Example:**
- Report generation
- Data export
- Import processing
- Calculation progress

### Loading States
Use progress bars to indicate loading progress when measurable.

**Example:**
- Page loading
- Content loading
- Resource fetching
- Initialization progress

## Anatomy

Progress components include these elements:

1. **Track** - Background container showing total progress area
2. **Fill** - Colored bar indicating completed progress
3. **Label** - Optional text showing percentage or status
4. **Container** - Wrapper that holds track and label

## Accessibility

### Keyboard Navigation
- Progress bars are not directly interactive
- Focus management for associated controls
- Keyboard users can see progress updates
- Progress is announced by screen readers

### Screen Reader Support
- Progress uses `role="progressbar"` attribute
- `aria-valuenow` indicates current value
- `aria-valuemin` and `aria-valuemax` define range
- `aria-label` provides accessible name
- Progress updates are announced
- Percentage is accessible to screen readers

### Visual Requirements
- Progress bar must have at least 3:1 contrast with background
- Fill color must be clearly visible
- Label text must have at least 4.5:1 contrast
- Progress must be clearly distinguishable
- Size must be adequate for visibility

### Best Practices
- Always provide accessible labels
- Update progress values smoothly
- Use appropriate variants for status
- Show labels for important progress
- Provide estimated time when possible
- Handle completion state clearly

## Content Guidelines

### Labels
- Show percentage when helpful
- Use descriptive text for status
- Keep labels concise
- Update labels as progress changes
- Consider time remaining estimates

### Values
- Use meaningful value ranges
- Ensure values are within 0 to max range
- Update values smoothly
- Avoid rapid value changes
- Provide accurate progress information

## Best Practices

### When to Use
- For operations with measurable progress
- For file uploads and downloads
- For multi-step processes
- For data processing operations
- When users need progress feedback

### When Not to Use
- For indeterminate loading (use Spinner)
- For very quick operations (unnecessary)
- When progress cannot be measured
- For operations under 1 second
- When progress is not meaningful

### Design Considerations
- Choose appropriate size for context
- Use variants to indicate status
- Show labels for important progress
- Ensure smooth value transitions
- Test with various progress values
- Consider mobile visibility

## Related Components

- **Spinner** - For indeterminate loading states
- **Alert** - For completion or error messages
- **Button** - Often triggers progress operations
- **Modal** - May contain progress indicators

## Technical Considerations

### Implementation
- Progress bars use percentage-based width
- Smooth transitions for value changes
- ARIA attributes for accessibility
- Variants use different color schemes
- Size variants adjust height
- Label updates dynamically

### Browser Support
- Progress bars work across all modern browsers
- CSS transitions are well-supported
- ARIA attributes are supported
- Percentage calculations are reliable
- Color variants work consistently

### Performance
- Progress bars are lightweight
- Smooth animations don't affect performance
- Value updates are efficient
- No layout shifts during updates
- Minimal re-renders needed

### Value Updates
- Update values smoothly
- Avoid rapid value changes
- Provide accurate progress
- Handle edge cases (0%, 100%)
- Consider animation duration

## Common Patterns

### File Upload Progress
Common pattern for file uploads.

```tsx:live
<Progress value={65} showLabel variant="default" />
```

### Form Submission
For showing form processing progress.

```tsx:live
<Progress value={100} showLabel variant="success" />
```

### Data Processing
For long-running operations.

```tsx:live
<Progress value={35} showLabel size="lg" />
```

## Validation

### Visual Validation
- Progress bar displays correctly
- Fill represents accurate percentage
- Variants show correct colors
- Sizes render at correct heights
- Labels display when enabled

### Functional Validation
- Value updates correctly
- Percentage calculation is accurate
- Variants apply correct styling
- Sizes render correctly
- Labels update dynamically

### Accessibility Validation
- ARIA attributes are properly set
- Screen readers announce progress
- Values are accessible
- Labels are readable
- Progress updates are announced
