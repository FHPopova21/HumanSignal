import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(15,23,32,0.6)] backdrop-blur-[10px] border border-[rgba(15,23,32,0.06)] dark:border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(15,23,32,0.06)] dark:shadow-none p-5 transition-colors duration-300",
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
