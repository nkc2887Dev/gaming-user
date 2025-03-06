import Image from "next/image";
import banner from "@/assets/images/Cricket-banner.jpg";
import Sports from "@/components/sports";

const Four = () => {
  return (
    <>
      <div className="relative w-full py-2">
        <Image src={banner} alt="Banner" priority />
      </div>
      <Sports viewmore={false} />
    </>
  );
};

export default Four;
