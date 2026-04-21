"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"

const variantClass: Record<ButtonVariant, string> = {
  default: "ds-btn--default",
  destructive: "ds-btn--destructive",
  outline: "ds-btn--outline",
  secondary: "ds-btn--secondary",
  ghost: "ds-btn--ghost",
  link: "ds-btn--link",
}

const sizeClass: Record<ButtonSize, string> = {
  default: "ds-btn--default-size",
  xs: "ds-btn--xs",
  sm: "ds-btn--sm",
  lg: "ds-btn--lg",
  icon: "ds-btn--icon",
  "icon-xs": "ds-btn--icon-xs",
  "icon-sm": "ds-btn--icon-sm",
  "icon-lg": "ds-btn--icon-lg",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
      className={cn("ds-btn", variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  )
}

Button.displayName = "Button"

export { Button }
export type { ButtonProps }
