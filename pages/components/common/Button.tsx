import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "@/lib/utils";

// Customized button variations
const buttonVariants = cva(
    `RXC-Button text-white text-sm font-bold leading-5 justify-center items-stretch px-6 py-2.5 max-md:px-5`,
    {
        variants: {
            variant: {
                primary: "bg-primary uppercase",
                secondary: "text-primary bg-secondary rounded-full border border-primary",
                inverted: "bg-white uppercase text-black border border-primary",
            },
            size: {
                small: "py-2 px-4",
                large: "text-xl py-3 px-6",
            },
        },
        defaultVariants: {
            size: "small",
            variant: "primary",
        },
    }
);

// It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// Also extends from class-variance-authority lastly we passed our forwarded Reference type
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    ref?: React.Ref<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(
    ({ size, variant, className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={cn(buttonVariants({ className, variant, size }))}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;