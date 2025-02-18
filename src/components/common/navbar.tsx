import Image from "next/image";
import Link from "next/link";
import Timer from "@/components/common/times";
import useColorShading from "@/components/common/colorShading";

export default function Navbar() {
  const colors = [
    "red-500",
    "green-500",
    "blue-500",
    "yellow-500",
    "purple-500",
    "pink-500",
  ];

  const shadingText = useColorShading("text-white", colors);
  return (
    <nav className="flex w-full flex-center justify-between p-2 bg-gray-500 text-white font-semibold">
      <div>
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
      </div>
      <div className="flex items-center gap-5">
        {["Home", "About", "Contact"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} className="px-5">
            {item}
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
