import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:opacity-90",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:opacity-90",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:opacity-90",
        outline: "text-foreground border-border",
        success: "border-transparent bg-success text-success-foreground hover:opacity-90",
        warning: "border-transparent bg-warning text-warning-foreground hover:opacity-90",
        error: "border-transparent bg-destructive text-destructive-foreground hover:opacity-90",
        info: "border-transparent bg-muted text-foreground hover:opacity-90",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      shape: {
        rounded: "rounded",
        square: "rounded-none",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "pill",
    },
  }
)

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
