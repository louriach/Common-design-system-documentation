"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva("ds-btn", {
  variants: {
    variant: {
      default: "ds-btn--default",
      destructive: "ds-btn--destructive",
      outline: "ds-btn--outline",
      secondary: "ds-btn--secondary",
      ghost: "ds-btn--ghost",
    },
    size: {
      sm: "ds-btn--icon-sm",
      md: "ds-btn--icon",
      lg: "ds-btn--icon-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  "aria-label": string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
