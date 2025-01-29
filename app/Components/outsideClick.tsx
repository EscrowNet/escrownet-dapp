import React, { useRef, useEffect, ReactNode } from 'react';

interface ClickOutsideWrapperProps {
  onClickOutside: () => void;
  children: ReactNode;
  className?: string;
}

const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({ onClickOutside, children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the clicked element or any of its ancestors have the class "brt"
      let target = event.target as HTMLElement;
      let shouldTrigger = true;
      while (target && target !== document.body) {
        if (target.classList.contains('bell')) {
          shouldTrigger = false;
          break;
        }
        target = target.parentElement!;
      }

      // If the click is outside the wrapper and not on an element with class "brt", trigger the function
      if (ref.current && !ref.current.contains(event.target as Node) && shouldTrigger) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default ClickOutsideWrapper;