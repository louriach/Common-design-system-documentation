---
title: Avatar
description: Circular image component for displaying user profile pictures, initials, or icons
category: Data Display
---

## Overview

Avatar components show user profile pictures, initials, or icons in a circular frame. They help identify people in interfaces, making conversations, comments, and user lists more personal and easier to scan. Avatars work well in headers, user lists, comments, notifications, and anywhere you need to represent a person or entity visually.

## Usage

### Basic Avatar
```tsx:live
<Avatar name="John Doe" />
```

### Avatar with Image
```tsx:live
<Avatar src="https://i.pravatar.cc/150?img=1" alt="User" name="Jane Smith" />
```

### Avatar Sizes
```tsx:live
<Avatar name="Small" size="sm" />
```

```tsx:live
<Avatar name="Medium" size="md" />
```

```tsx:live
<Avatar name="Large" size="lg" />
```

```tsx:live
<Avatar name="Extra Large" size="xl" />
```

### Avatar with Status
```tsx:live
<Avatar name="Online User" status="online" />
```

```tsx:live
<Avatar name="Offline User" status="offline" />
```

```tsx:live
<Avatar name="Away User" status="away" />
```

```tsx:live
<Avatar name="Busy User" status="busy" />
```

### Avatar with Fallback
```tsx:live
<Avatar name="Custom Fallback" fallback="👤" />
```

## Props

- `src`: string - Image source URL for the avatar
- `alt`: string - Alternative text for the image (defaults to name if provided)
- `name`: string - User name used to generate initials when no image is available
- `size`: "sm" | "md" | "lg" | "xl" - Avatar size (default: "md")
- `status`: "online" | "offline" | "away" | "busy" - Status indicator to show
- `fallback`: ReactNode - Custom fallback content when image fails or is not provided

## States

### With Image
When an image source is provided and loads successfully.

**Visual characteristics:**
- Circular image displayed
- Image fills the avatar circle
- Maintains aspect ratio
- Falls back to initials or icon if image fails

### With Initials
When no image is provided or image fails to load, initials are shown.

**Visual characteristics:**
- First and last name initials displayed
- Single initial if only one name provided
- Background color creates contrast
- Text color ensures readability

### With Fallback
When custom fallback content is provided.

**Visual characteristics:**
- Custom content displayed (icon, emoji, etc.)
- Centered within the avatar circle
- Maintains circular shape

### With Status Indicator
When a status prop is provided, a status dot appears.

**Visual characteristics:**
- Small colored dot in bottom-right corner
- Color indicates status (green=online, gray=offline, yellow=away, red=busy)
- Positioned on the avatar border
- Visible against avatar background

## Use Cases

### User Profiles
Avatars work well for representing users in profile views, headers, and user information areas.

**Example:**
- Profile pages
- User headers
- Account settings
- User cards

### Comments and Messages
Use avatars to identify commenters and message senders.

**Example:**
- Comment threads
- Chat messages
- Discussion forums
- Review sections

### User Lists
Use avatars in lists of users, team members, or participants.

**Example:**
- Team member lists
- Participant lists
- Collaborator lists
- User directories

### Notifications
Use avatars to show who triggered a notification or action.

**Example:**
- Activity feeds
- Notification lists
- Recent actions
- Social updates

## Anatomy

Avatar components include these elements:

1. **Container** - Circular wrapper that defines the avatar shape
2. **Image/Content** - The visual content (image, initials, or fallback)
3. **Status Indicator** - Optional colored dot showing user status
4. **Border** - Optional border around the avatar

## Accessibility

### Image Alt Text
- Always provide `alt` text for avatar images
- Use descriptive alt text (e.g., "Profile picture of John Doe")
- Default to user name if alt text not provided
- Ensure alt text is meaningful and descriptive

### Initials
- Initials are generated from the `name` prop
- Screen readers can announce the name
- Ensure sufficient contrast between text and background
- Initials should be clearly readable

### Status Indicators
- Status indicators are visual only
- Consider adding `aria-label` for status if important
- Don't rely solely on color to convey status
- Provide text alternative if status is critical information

### Visual Requirements
- Avatar must be at least 24×24 pixels
- Text (initials) must have at least 4.5:1 contrast with background
- Images must be clearly visible
- Status indicators must be distinguishable

### Best Practices
- Always provide a `name` prop for accessibility
- Use meaningful `alt` text for images
- Ensure images are properly sized and cropped
- Provide fallback content for missing images
- Test with various image aspect ratios

## Content Guidelines

### Names
- Use full names when available for better initials
- Handle single names gracefully
- Consider name length and readability
- Respect user privacy preferences

### Images
- Use square or circular source images
- Ensure images are high quality
- Optimize images for web performance
- Handle image loading errors gracefully

### Fallbacks
- Provide meaningful fallback content
- Use icons or emoji when appropriate
- Ensure fallbacks are accessible
- Keep fallback content simple and clear

## Best Practices

### When to Use
- Representing users or people
- Showing profile pictures
- Identifying commenters or authors
- Displaying team members
- User lists and directories

### When Not to Use
- For non-person entities (use icons instead)
- When space is extremely limited
- For decorative purposes only
- When image quality is poor
- When user privacy is a concern

### Design Considerations
- Choose appropriate size for context
- Ensure consistent sizing across interface
- Use status indicators sparingly
- Provide clear fallbacks for missing images
- Test with various name lengths
- Consider responsive sizing

## Related Components

- **Badge** - Often used with avatars to show counts or status
- **Card** - Avatars commonly appear in user cards
- **Button** - Avatars can be clickable buttons

## Technical Considerations

### Implementation
- Avatars use circular containers with overflow hidden
- Images are object-fit: cover to fill the circle
- Initials are generated from name prop
- Status indicators are absolutely positioned
- Fallback handling for image errors

### Browser Support
- Circular avatars work across all modern browsers
- Object-fit is supported in all modern browsers
- Fallback behavior is consistent
- Status indicators render correctly

### Performance
- Images should be optimized and cached
- Lazy loading can help with many avatars
- Initials generation is lightweight
- Status indicators have minimal overhead

## Common Patterns

### User Profile
Common pattern for showing user profiles.

```tsx:live
<Avatar src="https://i.pravatar.cc/150?img=2" name="Sarah Johnson" size="lg" status="online" />
```

### Comment Avatar
For comment threads and discussions.

```tsx:live
<Avatar name="Alex Chen" size="md" />
```

### Team Member
For team member lists.

```tsx:live
<Avatar name="Maria Garcia" size="sm" status="away" />
```

## Validation

### Visual Validation
- Avatar renders correctly in all sizes
- Images load and display properly
- Initials are clearly readable
- Status indicators are visible
- Fallbacks work as expected

### Functional Validation
- Image errors trigger fallback
- Initials generate correctly
- Status indicators appear when specified
- Custom fallbacks render properly
- All sizes render correctly

### Accessibility Validation
- Alt text is provided and meaningful
- Initials are accessible
- Status indicators don't interfere with screen readers
- Sufficient contrast for text
- Avatar is properly labeled
