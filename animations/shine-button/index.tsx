import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

type Variant = 'default' | 'accent' | 'plain' | 'danger' | 'outline';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-primaryColor text-white hover:bg-primaryColor/90',
  accent: 'bg-[#64537B] text-white hover:bg-[#58486C]',
  plain: 'bg-white text-black hover:bg-zinc-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-primaryColor text-primaryColor hover:bg-primaryColor/10',
};

export const ShineButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', className, disabled, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        type="button"
        aria-disabled={disabled}
        disabled={disabled}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        {...rest}
        className={cn(
          'relative inline-flex items-center justify-center rounded-md px-4 py-4 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryColor',
          'overflow-hidden shadow-md focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900',
          variantClasses[variant],
          className
        )}
      >
        <span className="relative z-10">{children}</span>

        {/* Shine effect */}
        <motion.span
          className="absolute left-[-75%] top-0 z-0 h-full w-1/3 skew-x-[-20deg] bg-white/40"
          initial={false}
          animate={false}
          whileHover={{
            x: ['-100%', '150%'],
            transition: {
              duration: 1.2,
              ease: 'easeInOut',
            },
          }}
        />
      </motion.button>
    );
  }
);

ShineButton.displayName = 'ShineButton';
