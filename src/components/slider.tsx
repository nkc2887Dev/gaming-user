"use client";

// import styles from "@/styles/slidingHeader.module.css";
import { motion } from "framer-motion";
import { LucideMegaphone } from "lucide-react";
import { HeaderSliderText } from "@/utils/constants/common";
import useTimer from "./common/hooks/usetimer";

const SlidingHeader = () => {
  const timer = useTimer();
  return (
    <div className="bg-[#045662] relative w-full h-8 flex items-center justify-between overflow-hidden text-[#ECECED] text-md">
      <div className="bg-[#045662] px-2 z-50">
        <LucideMegaphone />
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="absolute whitespace-nowrap"
        style={{ whiteSpace: "nowrap", minWidth: "100%" }}
      >
        {HeaderSliderText.map((text, index) => (
          <span key={index} className="mr-4">
            {text}
          </span>
        ))}
      </motion.div>
      <div className="bg-[#045662] px-2 z-50">{timer}</div>
    </div>
  );
};

export default SlidingHeader;
