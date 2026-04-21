import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "away" | "busy"
  fallback?: React.ReactNode
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
}

const statusSizeClasses = {
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-3.5 w-3.5",
}

const statusColorClasses = {
  online: "bg-success",
  offline: "bg-muted-foreground",
  away: "bg-warning",
  busy: "bg-destructive",
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0) return ""
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      name,
      size = "md",
      status,
      fallback,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false)
    const sizeClass = sizeClasses[size]
    const statusSizeClass = statusSizeClasses[size]
    const statusColorClass = status ? statusColorClasses[status] : ""

    const initials = name ? getInitials(name) : ""
    const displayAlt = alt || name || "Avatar"

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", className)}
        {...props}
      >
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden",
            sizeClass
          )}
        >
          {src && !imageError ? (
            <img
              src={src}
              alt={displayAlt}
              onError={() => setImageError(true)}
              className="ds-avatar__image"
            />
          ) : fallback ? (
            <span className="ds-avatar__inner">
              {fallback}
            </span>
          ) : initials ? (
            <span className="ds-avatar__inner">
              {initials}
            </span>
          ) : (
            <svg
              className="ds-avatar__icon"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-full border-2 border-background",
              statusSizeClass,
              statusColorClass
            )}
          />
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
