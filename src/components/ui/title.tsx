import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { useScrollReveal } from "../../hooks/useScrollReveal"

const titleVariants = cva(
  "font-serif italic leading-tight",
  {
    variants: {
      size: {
        sm: "text-2xl sm:text-3xl md:text-4xl",
        default: "text-4xl sm:text-5xl md:text-6xl",
        lg: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
        xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      }
    },
    defaultVariants: {
      size: "default",
      weight: "normal",
    },
  }
)

type TitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface TitleProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">,
  VariantProps<typeof titleVariants> {
  title: string
  subtitle?: string
  as?: TitleElement
  animate?: boolean
}

export function Title({ title, subtitle, className = "", size, weight, as: Tag = "h2", animate = true, ...props }: TitleProps) {
  const revealRef = useScrollReveal<HTMLDivElement>({
    type: 'fade-up',
    once: true,
  });

  const wrapperRef = animate ? revealRef : undefined

  return (
    <div ref={wrapperRef} className={className}>
      <Tag
        className={cn(titleVariants({ size, weight, className: subtitle ? "mb-2" : "" }))}
        {...props}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="font-mono text-xs sm:text-sm tracking-widest text-brand-accent/40">
          {subtitle}
        </p>
      )}
    </div>
  )
}