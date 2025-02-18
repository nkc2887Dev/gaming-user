import Loader from "@/components/loader";
import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-5">
        <Loader className="mr-[10%]" />
        <button
          className="text-lg px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          type="button"
        >
          <Link href="/">Back To Home</Link>
        </button>
      </div>
    </>
  );
};

export default Error404;
