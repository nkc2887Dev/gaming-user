import Image from "next/image";
import Link from "next/link";
import useColorShading from "@/components/common/hooks/useColorShading";
import { Colors } from "@/utils/constants/common";
import { NavbarMenu } from "@/utils/constants/routes";
import GradientButton from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [badgePosition, setBadgePosition] = useState<"topRight" | "right">("topRight");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      if (container.scrollWidth > container.clientWidth) {
        container.classList.add("overflow-x-auto");
        setBadgePosition("right");
      } else {
        container.classList.remove("overflow-x-auto");
        setBadgePosition("topRight");
      }
    };

    const observer = new MutationObserver(() => checkOverflow());
    observer.observe(container, { childList: true, subtree: true });

    window.addEventListener("resize", checkOverflow);
    checkOverflow();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const shadingText = useColorShading("text-white", Colors, 200);
  const shadingTextForbadge = useColorShading(
    "text-white",
    ["text-red-200", "text-red-500"],
    300
  );

  return (
    <nav className={`flex items-center flex-col`}>
      <div className="bg-gradient-to-b from-[#033249] to-[#159ab3] text-white p-4 px-5 w-full flex items-center justify-between gap-5">
        <div>
          <Image src={logo} alt="Logo" priority className="w-11 h-12" />
        </div>
        <GradientButton
          className="border !border-[#72BBEF] !bg-gradient-to-b !from-[#55BFD1] !to-[#1B6E81] !rounded-xl w-4/3 font-bold text-sm"
          label="🧑‍🦰 LOG IN"
        />
      </div>
      <div
        ref={containerRef}
        className="flex items-center text-white text-sm font-bold w-full bg-[#045662] whitespace-nowrap custom-scrollbar"
      >
        {NavbarMenu.map((item, index) => {
          const textColor = [2, 3].includes(index)
            ? `text-${shadingText}`
            : "text-white";
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`p-2 hover:bg-[#159ab3] ${textColor} relative`}
            >
              {badgePosition === "right" ? <h3 className="text-center">{item.symbol}</h3> : ""}
              <span>{item.name}</span>
              <Badge position={badgePosition} >
                <span
                  className={`${shadingTextForbadge} text-[50%] px-1 rounded-l-sm dark:bg-[#FFFFFF] dark:${shadingTextForbadge}`}
                >
                  LIVE
                </span>
                <span className={`text-[#FFFFFF] text-[75%] px-1 rounded-r-sm dark:bg-[#FF0000] dark:text-[#FFFFFF]`}>
                  {1}
                </span>
              </Badge>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
