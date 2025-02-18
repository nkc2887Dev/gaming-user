"use client";

import { useEffect, useState } from "react";
import { LucideMegaphone } from "lucide-react";
import styles from "@/styles/slidingHeader.module.css";

const SlidingHeader = ({ messages }: { messages: string[] }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className="bg-[#045662] w-full h-6">
      <div className="relative flex items-center w-full overflow-hidden">
        <div
          className={`text-white gap-8 ${styles.text} ${isAnimating ? styles.animate : ""}`}
        >
          {messages.map((message, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 text-xs">
              <LucideMegaphone />
              <span>{message}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingHeader;
