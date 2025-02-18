import Navbar from "@/components/common/navbar";
import SlidingHeader from "@/components/slider";

export default function Home() {
  const messages = [
    "1️⃣ Welcome To Our Exchange...",
    "2️⃣ ICC Champions Trophy Cup TOURNAMENT WINNER Bet Started in Our Exchange....💫💫💫",
  ];
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <SlidingHeader messages={messages} />
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-screen"></div>
    </div>
  );
}
