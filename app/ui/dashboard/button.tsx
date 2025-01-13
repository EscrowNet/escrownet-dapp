interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={variantClass[variant]}>
      {children}
    </button>
  );
}

const variantClass = {
  primary:
    "flex w-48 h-10 items-center justify-center rounded-md bg-midnight hover:opacity-90 px-3 text-sm font-medium text-white transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
  secondary:
    "flex w-48 h-10 items-center justify-center rounded-md bg-orange hover:opacity-90 px-3 text-sm font-medium text-midnight transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
};
