"use client";

import { motion } from "framer-motion";
import { LucideMegaphone } from "lucide-react";
import { FooterSliderText } from "@/utils/constants/common";

const SlidingHeader = () => {
  return (
    <div className="bg-gradient-to-b from-[#16A3BB] to-[#03364c] relative w-full h-8 flex items-center justify-between overflow-hidden text-[#ECECED] text-md">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="absolute whitespace-nowrap"
        style={{ whiteSpace: "nowrap", minWidth: "100%" }}
      >
        {FooterSliderText.map((text, index) => (
          <div key={index} className="inline-flex items-center gap-1 text-sm">
            <LucideMegaphone />
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingHeader;
