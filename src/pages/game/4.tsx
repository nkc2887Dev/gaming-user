import Image from "next/image";
import banner from "@/assets/images/Cricket-banner.jpg";
import Sports from "@/components/sports";
import SportsMenu from "@/components/common/sportsMenu";
import useDevice from "@/components/common/hooks/useDevice";

const Four = () => {
  const isMobile = useDevice();
  return (
    <div className="flex gap-2 pt-[5vh] flex-col md:flex-row p-2 md:pt-[5vh]">
      {!isMobile && (
        <nav className="flex h-full flex-col text-white">
          <SportsMenu isMobile={true} setIsMenuOpen={() => true} />
        </nav>
      )}
      <div>
        <div className="relative w-full mb-2">
          <Image src={banner} alt="Banner" priority />
        </div>
        <Sports viewmore={false} />
      </div>
    </div>
  );
};

export default Four;
