import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        secondary:
          "border-transparent bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
        outline: "text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
        warning:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700",
        error:
          "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        info:
          "border-transparent bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      shape: {
        rounded: "rounded-md",
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
  // If dot is true, render a small dot
  if (dot) {
    return (
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full bg-current",
          variant === "success" && "bg-green-500",
          variant === "warning" && "bg-yellow-500",
          variant === "error" && "bg-red-500",
          variant === "info" && "bg-blue-500",
          className
        )}
        aria-label={typeof children === "string" ? children : "Status indicator"}
        {...props}
      />
    )
  }

  // If count is provided, use it as content
  const content = count !== undefined ? (
    typeof count === "number" ? (
      count > overflowCount ? `${overflowCount}+` : count.toString()
    ) : (
      count
    )
  ) : (
    children
  )

  // Hide badge if count is 0 and showZero is false
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
