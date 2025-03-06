import Navbar from "@/components/common/navbar";
import SlidingHeader from "@/components/slider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const messages = [
    "1️⃣ Welcome To Our Exchange...",
    "2️⃣ ICC Champions Trophy Cup TOURNAMENT WINNER Bet Started in Our Exchange....💫💫💫",
  ];
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50">
          <SlidingHeader messages={messages} />
          <Navbar />
        </div>
        <div className="pt-[130px] h-[calc(100vh)] overflow-y-auto whitespace-nowrap custom-scrollbar">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
