import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GradientButton {
  label: string;
  redirect?: string;
  className?: string;
  size?: "lg" | "default" | "sm" | "icon";
  onclick?: () => void;
}

const GradientButton = ({
  label,
  className = "",
  redirect = "",
  size,
  onclick,
}: GradientButton) => {
  return (
    <Button
      onClick={onclick}
      {...(size ? { size } : {})}
      className={`${className} rounded-md font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#1497AF] to-[#022D44] text-white shadow-md hover:bg-[#017082]`}
    >
      {redirect ? <Link href={redirect}>{label}</Link> : label}
    </Button>
  );
};

export default GradientButton;
