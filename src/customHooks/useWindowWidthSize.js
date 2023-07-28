import { useState, useEffect } from "react";

const useWindowWidthSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // event listener to track window on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidthSize;
