import Image from "next/image";
import banner from "@/assets/images/Cricket-banner.jpg";
import Sports from "@/components/sports";
import { cn } from "@/lib/utils";
import SportsMenu from "@/components/common/sportsMenu";

const Four = () => {
  return (
    <div className="flex pt-2">
      <nav className="flex h-full flex-col text-white">
        <SportsMenu isMobile={true} setIsMenuOpen={() => true} />
      </nav>
      <div>
        <div className="relative w-full py-2">
          <Image src={banner} alt="Banner" priority />
        </div>
        <Sports viewmore={false} />
      </div>
    </div>
  );
};

export default Four;
