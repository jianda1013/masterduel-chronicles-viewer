import { useState, useEffect } from "react";

/**
 * Custom hook for handling scroll events with threshold detection
 * @param {number} threshold - Scroll threshold to trigger state change
 * @returns {boolean} isScrolled - Whether scroll position exceeds threshold
 */
export const useScrollHandler = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};
