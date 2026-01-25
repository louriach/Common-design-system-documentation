"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "primary" | "secondary"
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4 border-2",
      md: "w-8 h-8 border-2",
      lg: "w-12 h-12 border-3"
    }

    const variantClasses = {
      default: "border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-gray-100",
      primary: "border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-400",
      secondary: "border-gray-200 dark:border-gray-800 border-t-gray-600 dark:border-t-gray-400"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-block rounded-full animate-spin",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
