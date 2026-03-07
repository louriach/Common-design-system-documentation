"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface LinkProps extends React.ComponentProps<typeof Link> {
  variant?: "default" | "underline" | "subtle"
  external?: boolean
}

const LinkComponent = React.forwardRef<
  React.ElementRef<typeof Link>,
  LinkProps
>(({ className, variant = "default", external, href, children, ...props }, ref) => {
  const baseStyles = "text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
  
  const variantStyles = {
    default: "hover:opacity-80",
    underline: "hover:opacity-80 underline underline-offset-4",
    subtle: "text-muted-foreground hover:text-foreground"
  }

  const linkHref = typeof href === "string" ? href : href
  const isExternal = external || (typeof linkHref === "string" && (linkHref.startsWith("http") || linkHref.startsWith("//")))

  if (isExternal) {
    return (
      <a
        href={linkHref as string}
        className={cn(baseStyles, variantStyles[variant], className)}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
})
LinkComponent.displayName = "Link"

export { LinkComponent as Link }
