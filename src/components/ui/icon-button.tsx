"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type IconButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost"
type IconButtonSize = "sm" | "md" | "lg"

const variantClass: Record<IconButtonVariant, string> = {
  default: "ds-btn--default",
  destructive: "ds-btn--destructive",
  outline: "ds-btn--outline",
  secondary: "ds-btn--secondary",
  ghost: "ds-btn--ghost",
}

const sizeClass: Record<IconButtonSize, string> = {
  sm: "ds-btn--icon-sm",
  md: "ds-btn--icon",
  lg: "ds-btn--icon-lg",
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string
  variant?: IconButtonVariant
  size?: IconButtonSize
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("ds-btn", variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </button>
  )
)
IconButton.displayName = "IconButton"

export { IconButton }
