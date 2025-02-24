import Navbar from "@/components/common/navbar";
import HomePage from "@/components/home";
import SlidingHeader from "@/components/slider";

export default function Home() {
  const messages = [
    "1️⃣ Welcome To Our Exchange...",
    "2️⃣ ICC Champions Trophy Cup TOURNAMENT WINNER Bet Started in Our Exchange....💫💫💫",
  ];
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <SlidingHeader messages={messages} />
        <Navbar />
      </div>
      <div className="pt-[120px]">
        <HomePage />
      </div>
    </div>
  );
}
