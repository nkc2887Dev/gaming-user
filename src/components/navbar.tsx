import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-center justify-between p-2 bg-gray-500 text-white font-semibold">
      <div className="">
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" /> */}
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="text-center">
        <Link className="px-5" href="/">Home</Link>
        <Link className="px-5" href="/about">About</Link>
        <Link className="px-5" href="/contact">Contact</Link>
      </div>
      <button type="button">Profile</button>
    </div>
  );
}
