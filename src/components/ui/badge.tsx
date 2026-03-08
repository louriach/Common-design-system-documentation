import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva("ds-badge", {
  variants: {
    variant: {
      default: "ds-badge--default",
      secondary: "ds-badge--secondary",
      destructive: "ds-badge--destructive",
      outline: "ds-badge--outline",
      success: "ds-badge--success",
      warning: "ds-badge--warning",
      error: "ds-badge--error",
      info: "ds-badge--info",
    },
    size: {
      sm: "ds-badge--sm",
      md: "ds-badge--md",
      lg: "ds-badge--lg",
    },
    shape: {
      rounded: "ds-badge--rounded",
      square: "ds-badge--square",
      pill: "ds-badge--pill",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "pill",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  count?: number | React.ReactNode
  dot?: boolean
  showZero?: boolean
  overflowCount?: number
}

function Badge({
  className,
  variant,
  size,
  shape,
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
          variant === "info" && "bg-muted",
          className
        )}
        aria-label={typeof children === "string" ? children : "Status indicator"}
        {...props}
      />
    )
  }

  const content = count !== undefined ? (
    typeof count === "number" ? (
      count > overflowCount ? `${overflowCount}+` : count.toString()
    ) : (
      count
    )
  ) : (
    children
  )

  if (
    typeof count === "number" &&
    count === 0 &&
    !showZero &&
    children === undefined
  ) {
    return null
  }

  return (
    <div className={cn(badgeVariants({ variant, size, shape }), className)} {...props}>
      {content}
    </div>
  )
}

export { Badge, badgeVariants }
