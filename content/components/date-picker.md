---
title: Date Picker
description: Input component for selecting dates from a calendar interface
category: Forms
---

## Overview

Date picker components let people choose dates from a calendar interface. They provide a visual way to select dates without typing, reducing errors and improving the user experience. Date pickers work well for birth dates, appointment scheduling, event dates, and any scenario where accurate date selection matters.

## Usage

### Basic Date Picker
```tsx:live
<DatePicker />
```

### Date Picker with Label
```tsx:live
<DatePicker label="Birth Date" />
```

### Required Date Picker
```tsx:live
<DatePicker label="Appointment Date" required />
```

### Date Picker with Helper Text
```tsx:live
<DatePicker label="Event Date" helperText="Select a date within the next 30 days" />
```

### Date Picker with Min and Max Dates
```tsx:live
<DatePicker label="Check-in Date" min="2024-01-01" max="2024-12-31" />
```

### Error State
```tsx:live
<DatePicker label="Due Date" error helperText="Please select a valid date" />
```

### Disabled Date Picker
```tsx:live
<DatePicker label="Start Date" disabled value="2024-01-15" />
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| label | `string` | Label text displayed above the date picker. |
| value | `string` | Controlled date value (YYYY-MM-DD format). |
| defaultValue | `string` | Uncontrolled initial date value (YYYY-MM-DD format). |
| onChange | `function` | Change event handler. |
| onBlur | `function` | Blur event handler. |
| onFocus | `function` | Focus event handler. |
| disabled | `boolean` | Disables the date picker (default: false). |
| required | `boolean` | Marks the date picker as required (default: false). |
| error | `boolean` | Shows error state styling and message (default: false). |
| helperText | `string` | Helper text or error message displayed below date picker. |
| min | `string` | Minimum selectable date (YYYY-MM-DD format). |
| max | `string` | Maximum selectable date (YYYY-MM-DD format). |
| name | `string` | Name attribute for form submission. |
| id | `string` | Unique identifier (auto-generated if not provided). |
| aria-label | `string` | Accessible label for screen readers. |
| aria-describedby | `string` | ID of element describing the date picker. |

## States

### Default
The date picker appears in its normal, interactive state with the calendar icon visible.

**Visual characteristics:**
- Calendar icon displayed on the left
- Border uses standard color
- All valid dates are selectable
- Placeholder or current value shown

### Focus
When the date picker receives keyboard or mouse focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the input
- Calendar picker can be opened with keyboard
- Arrow key navigation available in calendar
- Enter key selects the focused date

### Disabled
A disabled date picker cannot be interacted with and appears visually muted.

**Visual characteristics:**
- Reduced opacity
- Cursor changes to not-allowed
- No interaction possible
- Current value remains visible
- Calendar icon appears muted

### Error
An error state indicates validation failure or required field not completed.

**Visual characteristics:**
- Border color changes to red
- Error message appears below
- Focus ring uses error color
- Helper text shows error message

## Use Cases

### Form Date Entry
Use date pickers for collecting dates in forms, such as birth dates, registration dates, or expiration dates.

**Example:**
- User registration forms
- Profile information
- Document dates
- License expiration

### Scheduling
Use date pickers for appointment booking, event planning, and reservation systems.

**Example:**
- Appointment scheduling
- Event registration
- Hotel bookings
- Meeting planning

### Date Range Selection
Use date pickers with min and max constraints to limit selectable date ranges.

**Example:**
- Check-in and check-out dates
- Subscription periods
- Delivery date selection
- Deadline setting

### Data Filtering
Use date pickers in filters and search interfaces to select date ranges for data queries.

**Example:**
- Report date ranges
- Transaction history filters
- Activity logs
- Analytics date selection

## Anatomy

Date picker components include these elements:

1. **Label** - Text that identifies what date is being selected
2. **Input Field** - Text input that displays the selected date
3. **Calendar Icon** - Visual indicator that opens the calendar picker
4. **Calendar Picker** - Dropdown calendar interface for date selection
5. **Helper Text** - Optional guidance or error message below the input

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the date picker
- Enter or Space opens the calendar picker
- Arrow keys navigate dates within the calendar
- Escape closes the calendar picker
- Focus indicators must be clearly visible
- Keyboard navigation works consistently

### Screen Reader Support
- Date picker uses proper label association
- Selected date is announced clearly
- Calendar navigation is announced
- Error messages are associated with the input
- Helper text is properly linked

### Visual Requirements
- Input must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Calendar icon must be clearly visible
- Focus indicators must meet contrast requirements
- Error states must be visually distinct

### Best Practices
- Always provide a clear label
- Use min and max to prevent invalid selections
- Provide helpful error messages
- Support keyboard-only navigation
- Ensure calendar is accessible on mobile devices
- Use consistent date format (YYYY-MM-DD)

## Content Guidelines

### Labels
- Use clear, descriptive labels
- Indicate what the date represents
- Keep labels concise (1-3 words)
- Match labels to form context

### Helper Text
- Provide guidance on date constraints
- Explain min/max date ranges when applicable
- Use clear, actionable language
- Keep helper text brief and relevant

### Date Format
- Use consistent date format throughout
- Display dates in user's locale when possible
- Store dates in ISO format (YYYY-MM-DD) internally
- Show format hint if needed

## Best Practices

### When to Use
- When accurate date entry is important
- For dates that need visual calendar selection
- When mobile keyboard optimization helps
- For dates with constraints or ranges
- When reducing typing errors matters

### When Not to Use
- For dates far in the past or future (typing may be faster)
- When space is extremely limited
- For relative dates like "today" or "yesterday"
- When date format is ambiguous
- For time selection (use time picker instead)

### Design Considerations
- Place date pickers in logical form order
- Use consistent styling throughout forms
- Ensure calendar opens in a visible area
- Test on mobile devices for usability
- Consider date range constraints
- Provide clear visual feedback

## Related Components

- **Input** - For free-form text entry including dates
- **Time Picker** - For selecting times
- **Date Range Picker** - For selecting date ranges
- **Form** - Container for multiple form controls

## Technical Considerations

### Implementation
- Date pickers use native HTML5 date input for best accessibility
- Custom styling maintains native keyboard and screen reader support
- Calendar icon is positioned absolutely and doesn't interfere with selection
- Min and max attributes restrict selectable dates
- Browser-native calendar picker provides consistent experience

### Browser Support
- Native date inputs work across all modern browsers
- Mobile browsers provide optimized date pickers
- Keyboard navigation is consistent
- Screen reader support is built-in
- Fallback to text input on older browsers

### Performance
- Date pickers are lightweight and render quickly
- Native browser calendar is performant
- No additional JavaScript required for basic functionality
- Validation happens client-side

### Date Format
- Internal format should be ISO 8601 (YYYY-MM-DD)
- Display format can vary by locale
- Always validate date format on submission
- Handle timezone considerations when needed

## Common Patterns

### Birth Date Selection
Common pattern for user registration and profiles.

```tsx:live
<DatePicker label="Date of Birth" max="2024-12-31" helperText="You must be 18 or older" />
```

### Appointment Booking
For scheduling appointments with future date constraints.

```tsx:live
<DatePicker label="Preferred Date" min="2024-01-01" helperText="Select a date at least 24 hours in advance" />
```

### Event Registration
For event dates with specific range requirements.

```tsx:live
<DatePicker label="Event Date" min="2024-06-01" max="2024-08-31" required />
```

## Validation

### Visual Validation
- Date picker displays correctly with calendar icon
- Selected date is clearly visible
- Error states are visually distinct
- Helper text appears in correct location
- Calendar picker opens and closes properly

### Functional Validation
- Date selection works correctly
- Min and max constraints are enforced
- Keyboard navigation functions properly
- Focus indicators are visible
- Calendar picker is accessible

### Accessibility Validation
- ARIA attributes are properly set
- Keyboard navigation works correctly
- Screen readers announce dates properly
- Focus indicators meet contrast requirements
- Error messages are associated correctly
