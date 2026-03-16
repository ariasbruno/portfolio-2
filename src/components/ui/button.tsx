import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 rounded-md font-medium text-sm",
        outline:
          "border border-white/20 rounded-full text-xs uppercase tracking-wider hover:bg-white hover:text-black duration-300",
        ghost:
          "text-xs tracking-widest uppercase hover:text-white/70",
        icon: "rounded-full border border-white/10 hover:bg-white hover:text-black",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8 outline-none",
        icon: "h-12 w-12",
        outline: "px-6 py-2",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  "data-cursor-type"?: string;
}

function Button({ className, variant, size, "data-cursor-type": dataCursorType, ref, ...props }: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  let cursorType = "button";
  if (variant === "icon" || variant === "outline") {
    cursorType = "button-round";
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      data-cursor-type={dataCursorType || cursorType}
      {...props}
    />
  )
}

export { Button }
