import { useState, useEffect } from "react";

export const useVisibleCount = (
  initialDesktop: number,
  initialTablet: number,
  initialMobile: number
) => {
  const getInitialVisible = () => {
    if (window.innerWidth >= 1440) return initialDesktop;
    if (window.innerWidth >= 768) return initialTablet;
    return initialMobile;
  };

  const [visibleCount, setVisibleCount] = useState(getInitialVisible());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getInitialVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { visibleCount, setVisibleCount };
};
