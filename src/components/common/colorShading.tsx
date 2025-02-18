import React, { useEffect, useState } from "react";

const useColorShading = (defaultColor: string, colors: string[]): string => {
  const [textColor, setTextColor] = useState(defaultColor);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return textColor;
};

export default useColorShading;
