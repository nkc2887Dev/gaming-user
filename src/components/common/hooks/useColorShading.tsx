import { useEffect, useState } from "react";

const useColorShading = (
  defaultColor: string,
  colors: string[],
  duration: number,
): string => {
  const [textColor, setTextColor] = useState(defaultColor);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(colors[Math.floor(Math.random() * colors.length)]);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return textColor;
};

export default useColorShading;
