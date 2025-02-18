import Loader from "@/components/common/loader";
import Navbar from "@/components/common/navbar";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/home")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="mr-[10%]" />
      </div>
    </>
  );
}
