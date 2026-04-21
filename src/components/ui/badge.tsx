import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "error" | "info"
type BadgeSize = "sm" | "md" | "lg"
type BadgeShape = "rounded" | "square" | "pill"

const variantClass: Record<BadgeVariant, string> = {
  default: "ds-badge--default",
  secondary: "ds-badge--secondary",
  destructive: "ds-badge--destructive",
  outline: "ds-badge--outline",
  success: "ds-badge--success",
  warning: "ds-badge--warning",
  error: "ds-badge--error",
  info: "ds-badge--info",
}

const sizeClass: Record<BadgeSize, string> = {
  sm: "ds-badge--sm",
  md: "ds-badge--md",
  lg: "ds-badge--lg",
}

const shapeClass: Record<BadgeShape, string> = {
  rounded: "ds-badge--rounded",
  square: "ds-badge--square",
  pill: "ds-badge--pill",
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  shape?: BadgeShape
  count?: number | React.ReactNode
  dot?: boolean
  showZero?: boolean
  overflowCount?: number
}

function Badge({
  className,
  variant = "default",
  size = "md",
  shape = "pill",
  count,
  dot,
  showZero = false,
  overflowCount = 99,
  children,
  ...props
}: BadgeProps) {
  if (dot) {
    return (
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full bg-current",
          variant === "success" && "bg-success",
          variant === "warning" && "bg-warning",
          variant === "error" && "bg-destructive",
          className
        )}
        aria-label={typeof children === "string" ? children : "Status indicator"}
        {...props}
      />
    )
  }

  const content =
    count !== undefined
      ? typeof count === "number"
        ? count > overflowCount
          ? `${overflowCount}+`
          : count.toString()
        : count
      : children

  if (typeof count === "number" && count === 0 && !showZero && children === undefined) {
    return null
  }

  return (
    <div
      className={cn("ds-badge", variantClass[variant], sizeClass[size], shapeClass[shape], className)}
      {...props}
    >
      {content}
    </div>
  )
}

export { Badge }
