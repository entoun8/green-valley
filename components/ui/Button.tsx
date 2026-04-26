import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center font-semibold",
    "rounded-[50px] transition-transform duration-200 active:scale-95",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        filled: [
          "bg-(--colour-green-starbucks) text-white",
          "hover:bg-(--colour-green-accent)",
          "focus-visible:ring-(--colour-green-starbucks)",
        ],
        outlined: [
          "border-2 border-(--colour-green-starbucks) text-(--colour-green-starbucks) bg-transparent",
          "hover:bg-(--colour-green-starbucks) hover:text-white",
          "focus-visible:ring-(--colour-green-starbucks)",
        ],
        inverted: [
          "bg-white text-(--colour-green-house)",
          "hover:bg-(--colour-canvas)",
          "focus-visible:ring-white",
        ],
        "dark-outlined": [
          "border-2 border-white text-white bg-transparent",
          "hover:bg-white hover:text-(--colour-green-house)",
          "focus-visible:ring-white",
        ],
      },
      size: {
        sm: "h-[3.6rem] px-[2rem] text-[1.3rem]",
        md: "h-[4.4rem] px-[2.8rem] text-[1.5rem]",
        lg: "h-[5.2rem] px-[3.6rem] text-[1.6rem]",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
