import { useEffect } from "react";

interface LockBodyScrollProps {
  lock: boolean;
}

export default function LockBodyScroll({ lock }: LockBodyScrollProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;
    const originalPaddingRight = document.body.style.paddingRight;

    // Handle ESC key to close modals
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && lock) {
        // Dispatch a custom event that modal components can listen for
        document.dispatchEvent(new CustomEvent("escrownet:escapePressed"));
      }
    };

    if (lock) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      window.scrollTo({ top: 0, behavior: "smooth" });

      document.body.style.transition = "all 0.3s ease-in-out";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      
      // Add padding to prevent layout shift when scrollbar disappears
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Add event listener for ESC key
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.transition = "all 0.3s ease-in-out";
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
      document.body.style.paddingRight = originalPaddingRight;
      
      // Remove event listener
      document.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      document.body.style.transition = "";
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
      document.body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [lock]);

  return null;
}
