---
title: Toggle
description: Switch control component for turning options on or off
category: Forms
---

## Overview

Toggle components let people turn options on or off with a single action. They provide a clear visual indication of a binary state through a switch-like interface. Toggles work well for settings, preferences, and features that have two distinct states. They're ideal when you want to emphasize the on/off nature of a choice more than checkboxes do.

## Usage

### Basic Toggle
```tsx:live
<Toggle label="Enable notifications" />
```

### Checked State
```tsx:live
<Toggle label="Dark mode" checked />
```

### Disabled State
```tsx:live
<Toggle label="Auto-save" disabled />
```

### Required Toggle
```tsx:live
<Toggle label="I agree to receive emails" required />
```

### Toggle with Helper Text
```tsx:live
<Toggle label="Email notifications" helperText="Receive updates about your account activity" />
```

### Error State
```tsx:live
<Toggle label="Accept terms" error helperText="You must accept the terms to continue" />
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| label | `string` | Label text shown next to the toggle. |
| checked | `boolean` | Controlled checked state. |
| defaultChecked | `boolean` | Uncontrolled initial checked state. |
| disabled | `boolean` | Disables the toggle (default: false). |
| required | `boolean` | Marks the toggle as required (default: false). |
| error | `boolean` | Shows error state styling and message (default: false). |
| helperText | `string` | Helper text or error message shown below toggle. |
| name | `string` | Name attribute for form submission. |
| value | `string` | Value attribute for form submission. |
| id | `string` | Unique identifier (auto-generated if not provided). |
| aria-label | `string` | Accessible label for screen readers. |
| aria-describedby | `string` | ID of element describing the toggle. |
| onChange | `function` | Change event handler. |
| onBlur | `function` | Blur event handler. |
| onFocus | `function` | Focus event handler. |

## States

### Unchecked (Off)
The default state when the toggle is off.

**Visual characteristics:**
- Switch appears in the left/off position
- Background uses neutral gray color
- Switch handle positioned on the left
- Label text in normal color

### Checked (On)
State when the toggle is turned on.

**Visual characteristics:**
- Switch appears in the right/on position
- Background uses accent color (typically blue)
- Switch handle positioned on the right
- Clear visual distinction from off state

### Focus
Active state when the toggle receives keyboard or mouse focus.

**Visual characteristics:**
- Focus ring appears around the switch
- Keyboard navigation enabled
- Ready for interaction
- Focus indicator meets accessibility standards

### Disabled
A disabled toggle cannot be interacted with and appears visually muted.

**Visual characteristics:**
- Reduced opacity
- Cursor changes to not-allowed
- No interaction possible
- Current state remains visible

### Error
An error state indicates validation failure or required field not completed.

**Visual characteristics:**
- Error message appears below
- Helper text shows error message
- Focus ring uses error color when focused
- Visual indication of validation issue

## Use Cases

### Settings and Preferences
Toggles work well for application settings and preferences that have on/off states.

**Example:**
- Dark mode
- Email notifications
- Auto-save
- Sound effects
- Location services

### Feature Activation
Toggles suit enabling or disabling features or functionality.

**Example:**
- Enable two-factor authentication
- Turn on auto-renewal
- Activate premium features
- Enable sharing options

### Agreement and Consent
Toggles fit accepting terms, agreements, or consent options.

**Example:**
- Accept terms and conditions
- Agree to privacy policy
- Consent to marketing emails
- Accept cookies

### Filter and View Options
Toggles handle filtering or view mode options.

**Example:**
- Show completed items
- Display grid view
- Filter by category
- Show advanced options

## Anatomy

Toggle components include these elements:

1. **Switch Track** - The background track that the handle moves along
2. **Switch Handle** - The circular element that slides to indicate state
3. **Label** - Text that describes what the toggle controls
4. **Helper Text** - Optional guidance or error messages

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the toggle
- Space or Enter toggles the state
- Focus indicators must be clearly visible
- Keyboard navigation works consistently

### Screen Reader Support
- Toggle uses `role="switch"` for proper semantics
- `aria-checked` indicates current state (true/false)
- Label is associated with the toggle using `htmlFor` and `id`
- Required state is announced
- Error state is announced with `aria-invalid`
- Helper text is associated with `aria-describedby`

### Visual Requirements
- Interactive area must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Text must be readable when zoomed to 200%
- Focus indicators must meet contrast requirements
- Switch states must be clearly distinguishable

### Best Practices
- Always provide a label for the toggle
- Use clear, action-oriented labels
- Make the on/off state obvious through visual design
- Use helper text to explain what the toggle does
- Ensure sufficient color contrast between states
- Don't rely on color alone - use position and movement to indicate state

## Content Guidelines

### Labels
- Use clear, action-oriented verbs when possible
- Keep labels concise (1-4 words typically)
- Make it clear what happens when toggled on
- Use consistent terminology across toggles
- Avoid negative phrasing when possible

### Helper Text
- Explain what the toggle controls
- Clarify the consequences of turning it on or off
- Provide context when helpful
- Keep helper text concise and actionable

## Best Practices

### When to Use
- Binary on/off choices
- Settings and preferences
- Feature activation/deactivation
- When the switch metaphor fits the interaction
- When you want to emphasize the on/off nature

### When Not to Use
- Multiple selections (use checkboxes)
- Single choice from a group (use radio buttons)
- When a checkbox better fits the mental model
- For actions that trigger immediately (use buttons)
- When the state isn't clearly binary

### Design Considerations
- Make the switch large enough for easy interaction
- Ensure clear visual distinction between on/off states
- Use appropriate colors (typically blue for on, gray for off)
- Provide smooth animation for state changes
- Test with various screen sizes and input methods
- Ensure the switch is accessible to all users

## Related Components

- **Checkbox** - For multiple selections or when checkbox metaphor fits better
- **Radio** - For single choice from a group
- **Button** - For actions that trigger immediately

## Technical Considerations

### Implementation
- Toggles use native checkbox inputs with `role="switch"` for accessibility
- Custom styling creates the switch appearance
- State changes are animated for better user experience
- Focus management ensures keyboard accessibility

### Browser Support
- Native checkbox inputs work across all modern browsers
- Custom styling may vary slightly between browsers
- Animations use CSS transitions for smooth performance
- Keyboard navigation is consistent across platforms

### Performance
- Toggles have minimal performance impact
- CSS transitions provide smooth animations
- No JavaScript required for basic functionality
- State changes are immediate and responsive

## Common Patterns

### Settings Toggle
Common pattern for application settings.

```tsx:live
<Toggle label="Enable dark mode" helperText="Switch to dark theme" />
```

### Notification Toggle
For notification preferences.

```tsx:live
<Toggle label="Email notifications" helperText="Receive email updates" />
```

### Feature Toggle
For enabling or disabling features.

```tsx:live
<Toggle label="Auto-save" helperText="Automatically save your work" />
```

## Validation

### Visual Validation
- Toggle has clear visual state (on, off, focus, disabled, error)
- On/off states are immediately obvious
- Error state is clearly indicated
- Helper text is properly associated

### Functional Validation
- Toggle changes state when clicked
- Keyboard navigation works correctly
- Disabled state prevents interaction
- Required state is enforced when needed

### Accessibility Validation
- Label is properly associated with the toggle
- Keyboard navigation works correctly
- Screen readers announce the toggle and its state
- Focus indicators meet contrast requirements
- Helper text is announced to screen readers
- `aria-checked` correctly reflects the state
