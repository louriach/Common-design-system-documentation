"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva("ds-btn", {
  variants: {
    variant: {
      default: "ds-btn--default",
      destructive: "ds-btn--destructive",
      outline: "ds-btn--outline",
      secondary: "ds-btn--secondary",
      ghost: "ds-btn--ghost",
      link: "ds-btn--link",
    },
    size: {
      default: "ds-btn--default-size",
      xs: "ds-btn--xs",
      sm: "ds-btn--sm",
      lg: "ds-btn--lg",
      icon: "ds-btn--icon",
      "icon-xs": "ds-btn--icon-xs",
      "icon-sm": "ds-btn--icon-sm",
      "icon-lg": "ds-btn--icon-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
