import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/cnHelper";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-neutral-100",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white hover:bg-orange-400",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "bg-transparent border border-neutral-300 hover:bg-neutral-200 ",
        subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 ",
        ghost:
          "bg-transparent hover:bg-neutral-100  data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-neutral-900 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
