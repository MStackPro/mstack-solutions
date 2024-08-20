import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
    required
      type={type}
      className={cn(
        "flex h-10 w-[18rem] rounded-md border border-textGray bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-textGray outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-textGray",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
