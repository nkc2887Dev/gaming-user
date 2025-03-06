import Navbar from "@/components/common/navbar";
import SlidingHeader from "@/components/slider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Online Betting Sports & Live Casino Games in India | 1xbook
        </title>
      </Head>
      <ToastContainer />
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50">
          <SlidingHeader />
          <Navbar />
        </div>
        <div className="pt-[130px] h-[calc(100vh)] overflow-y-auto whitespace-nowrap custom-scrollbar">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
