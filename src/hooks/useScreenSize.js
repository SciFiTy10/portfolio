import React, { useState, useEffect } from "react";

const useScreenSize = () => {
  // Initialize screenSize state
  const [screenSize, setScreenSize] = useState({
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setScreenSize({
        isMobile: window.innerWidth < 769 ? true : false,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state relies on initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreenSize;
