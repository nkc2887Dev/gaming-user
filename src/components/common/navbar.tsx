import Image from "next/image";
import Link from "next/link";
import Timer from "@/components/common/times";
import useColorShading from "@/components/common/colorShading";
import { Colors } from "@/utils/constants/common";
import { NavbarMenu } from "@/utils/constants/routes";

export default function Navbar() {
  const shadingText = useColorShading("text-white", Colors);

  return (
    <nav className="flex w-full flex-center justify-between p-2 bg-gray-500 text-white font-semibold">
      <div>
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
        <img src="/next.svg" alt="logo" className="w-15 h-10" />
      </div>
      <div className="flex items-center gap-5">
        {NavbarMenu.map((item) => (
          <Link key={item.name} href={item.link} className={`px-5`}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <button type="button">Profile</button>
        <Timer textColor={shadingText} />
      </div>
    </nav>
  );
}
