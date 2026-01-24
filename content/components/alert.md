---
title: Alert
description: Contextual feedback messages for communicating information, status updates, and important notices to users
category: Feedback
---

## Overview
Alert components show contextual feedback messages that need attention. Alerts present information, status updates, warnings, errors, and success messages without disrupting the user's workflow. They clarify system status and suggest what to do next.

## Usage

### Basic Alert
```tsx:live
<Alert type="info" title="Information">
  This is an informational alert message.
</Alert>
```

### Success Alert
```tsx:live
<Alert type="success" title="Success">
  Your changes have been saved successfully.
</Alert>
```

### Warning Alert
```tsx:live
<Alert type="warning" title="Warning">
  This action cannot be undone.
</Alert>
```

### Error Alert
```tsx:live
<Alert type="error" title="Error">
  Failed to save changes. Please try again.
</Alert>
```

## Props
- `type`: "info" | "success" | "warning" | "error" - Alert status type
- `title`: string - Alert title/heading (required)
- `description`: string - Additional detailed content (optional)
- `closable`: boolean - Show close button (default: false)
- `icon`: ReactNode - Custom icon (optional, defaults to type-specific icon)
- `onClose`: function - Callback when alert is dismissed
- `variant`: "default" | "banner" | "inline" - Visual style variant
- `action`: ReactNode - Action button or link (optional)

## Variants

### Default Alert
Standard alert that appears in content areas. Best for inline feedback within forms or content.

### Banner Alert
Full-width alert that appears at the top of the page. Used for site-wide announcements or critical information.

### Inline Alert
Contextual alert placed near related content. Appears within task flows to provide immediate feedback.

## States

### Informational (Info)
- **Color**: Blue
- **Icon**: Information icon
- **Use case**: Provide additional context, tips, or non-critical information
- **Example**: "New features available in the latest update"

### Success
- **Color**: Green
- **Icon**: Checkmark icon
- **Use case**: Confirm successful completion of actions
- **Example**: "Your profile has been updated successfully"

### Warning
- **Color**: Yellow/Orange
- **Icon**: Warning triangle icon
- **Use case**: Warn users about potential issues or undesirable actions
- **Example**: "Unsaved changes will be lost if you navigate away"

### Error
- **Color**: Red
- **Icon**: Error/X icon
- **Use case**: Communicate errors, failures, or critical issues
- **Example**: "Unable to connect to server. Please check your connection"

## Accessibility
- Use semantic HTML: `<div role="alert">` or `<div role="alertdialog">` for dynamic alerts
- Provide `aria-live` attribute for screen reader announcements:
  - `aria-live="polite"` for info/success (non-urgent)
  - `aria-live="assertive"` for warning/error (urgent)
- Include `aria-label` or `aria-labelledby` for alert title
- Use `aria-describedby` to associate description with title
- Ensure sufficient color contrast (WCAG 2.1 AA minimum)
- Don't rely on color alone - use icons and text to convey meaning
- Keyboard accessible:
  - Tab to focus close button
  - Enter or Space to activate close button
  - Escape key closes dismissible alerts
- For actionable alerts, ensure action buttons are keyboard accessible
- Screen reader users should hear:
  - Alert type (info, success, warning, error)
  - Title text
  - Description if present
  - Action availability if present

## Content Guidelines

### Title
- Keep titles short and descriptive (1-5 words)
- Clearly state the most important information
- For errors: State what went wrong or what can't be done
- Don't end titles with periods
- Use sentence case, not title case
- Be specific: "Payment failed" not "Error occurred"

### Description
- Limit to 1-2 short sentences
- Don't repeat or paraphrase the title
- Explain how to resolve the issue (especially for errors)
- Include actionable next steps when possible
- Use plain language, avoid technical jargon

### Action Buttons
- Keep labels concise (1-2 words)
- Clearly indicate the action: "Retry", "View Details", "Undo"
- Place action buttons at the end of alert content
- For inline alerts: Use ghost/secondary button style
- For banner alerts: Use tertiary button style

### Links
- Make links descriptive and meaningful
- Indicate destination clearly
- Can be within body content or as separate action
- Use for "Learn more", "View details", or navigation to resolve issues

## Best Practices

### When to Use
- ✅ Provide feedback after user actions (form submission, save, delete)
- ✅ Communicate system status changes
- ✅ Warn users about potentially destructive actions
- ✅ Display validation errors
- ✅ Show success confirmations
- ✅ Provide contextual help or tips

### When NOT to Use
- ❌ For information that should be permanently visible (use callout/banner instead)
- ❌ For critical errors that block user flow (use error pages)
- ❌ For non-urgent information that doesn't need immediate attention
- ❌ As a replacement for inline form validation
- ❌ For promotional content (use dedicated promotional components)

### Dismissal Behavior
- **Info/Success**: Can auto-dismiss after 5-10 seconds (optional)
- **Warning**: Should persist until user dismisses or takes action
- **Error**: Must persist until resolved or user dismisses
- **Banner**: Typically persistent, user-dismissible
- Always provide close button for dismissible alerts
- For auto-dismissing alerts, ensure users can access the information elsewhere

### Placement
- **Inline**: Place near related content or form fields
- **Banner**: Top of page, below navigation
- **Toast**: Top-right corner, stacks vertically
- **Form errors**: Below form title or above submit button
- **Success messages**: Near the action that triggered them

### Multiple Alerts
- Stack alerts vertically with consistent spacing
- Most recent/important alert should appear first
- Limit to 3-4 alerts visible at once
- Consider using notification center for many alerts
- Group related alerts when possible

### Visual Hierarchy
- Use high contrast for critical errors
- Use low contrast for informational messages (less disruptive)
- Ensure icons are clearly visible and meaningful
- Maintain consistent spacing and padding
- Use appropriate sizing for context (banner vs inline)

## Examples

### Basic Alert
```tsx:live
<Alert type="info" title="New feature available">
  Check out our latest updates in the settings panel.
</Alert>
```

### With Description
```tsx:live
<Alert type="warning" title="Unsaved changes">
  You have unsaved changes that will be lost if you navigate away.
</Alert>
```

### Success Alert
```tsx:live
<Alert type="success" title="Changes saved">
  Your changes have been saved successfully.
</Alert>
```

### Error Alert
```tsx:live
<Alert type="error" title="Upload failed">
  The file could not be uploaded. Please try again.
</Alert>
```

## Related Components
- **Button** - For actions related to the alert
- **Toast** - For non-intrusive, time-based notifications
- **Callout** - For persistent, contextual information
- **Badge** - For status indicators
- **Badge** - For status indicators
