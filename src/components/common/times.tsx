import { useEffect, useState } from "react";

export default function Timer({ textColor }: { textColor: string }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-${textColor} text-lg p-2`}>
      <span>{currentTime}</span>
    </div>
  );
}
