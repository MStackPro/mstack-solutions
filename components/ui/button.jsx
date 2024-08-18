import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium uppercase text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-30 transition duration-500 ease",
  {
    variants: {
      variant: {
        default: "bg-[#d80000] text-slate-50 hover:bg-[#7f0c0c] dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        third:
          "bg-[#1e1e1e] text-[#f1f1f1] hover:bg-[#a5a5a5] dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-[#f1f1f1] text-slate-900 hover:bg-[#a5a5a5] dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-[#f1f1f1] underline-offset-4 hover:underline-text-primary hover:underline dark:text-slate-50 transition duration-500 ease",
      },
      size: {
        default: "h-[44px] px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
