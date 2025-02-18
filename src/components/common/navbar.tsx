import Image from "next/image";
import Link from "next/link";
import useColorShading from "@/components/common/hooks/useColorShading";
import { Colors } from "@/utils/constants/common";
import { NavbarMenu } from "@/utils/constants/routes";
import GradientButton from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const shadingText = useColorShading("text-white", Colors, 200);

  return (
    <nav className={`flex items-center flex-col `}>
      <div className="bg-gradient-to-b from-[#033249] to-[#159ab3] text-white p-4 px-5 w-full flex items-center justify-between gap-5">
        <div>
          {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
          <img src="/next.svg" alt="logo" className="w-15 h-10" />
        </div>
        <GradientButton
          className="border !border-[#72BBEF] !bg-gradient-to-b !from-[#55BFD1] !to-[#1B6E81] !rounded-xl w-4/3 font-bold text-sm"
          label="🧑‍🦰 LOG IN"
        />
      </div>
      <div className="flex items-start text-white text-sm font-bold w-full bg-[#045662]">
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
              {item.name}
              <Badge variant="sports" position="topRight">
                <span>
                <span className="text-[75%] text-[rgba(255,0,0,0.5)]">LIVE</span>
                <span className="text-[75%] text-white bg-[rgb(255, 0, 0)]">{1}</span>
                </span>
              </Badge>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
