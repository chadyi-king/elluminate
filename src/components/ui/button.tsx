import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-black hover:border-2 hover:border-primary hover:text-white",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury gold variants - solid gold, black with gold outline + white text on hover
        gold: "bg-primary text-primary-foreground font-semibold shadow-gold hover:bg-black hover:border-2 hover:border-primary hover:text-white hover:shadow-gold-intense active:scale-100",
        "gold-outline": "border-2 border-primary bg-primary text-primary-foreground hover:bg-black hover:text-white hover:shadow-gold transition-all duration-300 font-semibold tracking-wide",
        "gold-ghost": "text-primary hover:text-white hover:bg-black hover:border hover:border-primary transition-all duration-300",
        hero: "bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold tracking-widest uppercase hover:bg-black hover:border-2 hover:border-primary hover:text-white hover:shadow-gold-intense transition-all duration-500",
        luxury: "bg-primary border border-primary/30 text-primary-foreground hover:bg-black hover:border-primary hover:text-white hover:shadow-gold-soft backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
