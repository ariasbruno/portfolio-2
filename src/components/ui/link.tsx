/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const linkVariants = cva(
  "inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "text-white hover:text-white/70",
        underline: "text-white hover:text-white/70 hover:underline underline-offset-4",
        ghost: "text-xs font-bold tracking-widest uppercase hover:text-white/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LinkProps
  extends Omit<RouterLinkProps, "to">,
  VariantProps<typeof linkVariants> {
  to?: string | Partial<Location>;
  href?: string;
  "data-cursor-type"?: string;
  isExternal?: boolean;
}


function Link({ className, variant, isExternal, "data-cursor-type": dataCursorType, href, to, ref, ...props }: LinkProps & { ref?: React.Ref<HTMLAnchorElement> }) {
  // Determine the destination (href for external, to for internal)
  const destination = (isExternal ? href : to) || "#";

  // Determine the cursor type
  const cursorType = dataCursorType || (isExternal ? "redirect" : "link");

  if (isExternal) {
    return (
      <a
        href={destination as string}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        data-cursor-type={cursorType}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  }

  return (
    <RouterLink
      to={destination}
      className={cn(linkVariants({ variant, className }))}
      ref={ref}
      data-cursor-type={cursorType}
      {...props}
    />
  )
}

export { Link, linkVariants }
