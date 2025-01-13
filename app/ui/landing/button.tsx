type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  rest?: React.ComponentProps<"button">;
};

const variants = {
  primary:
    "flex h-10 items-center justify-center rounded-md bg-midnight hover:opacity-90 px-3 text-sm font-medium text-white transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  secondary:
    "flex h-10 items-center justify-center rounded-md bg-purple hover:opacity-90 px-3 text-sm font-medium text-white transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
};

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={`${variants[variant]} ${className || ""}`}>
      {children}
    </button>
  );
}
