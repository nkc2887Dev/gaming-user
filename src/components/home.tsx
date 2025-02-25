import Image from "next/image";
import banner from "@/assets/images/main-banner.webp";
import pgBanner from "@/assets/images/pg-banner.webp";
import bonus1 from "@/assets/images/bonus-1.webp";
import bonus4 from "@/assets/images/bonus-4.webp";
import bonus6 from "@/assets/images/bonus-6.webp";
import gif1 from "@/assets/gif/RDGIF-1.gif";
import gif2 from "@/assets/gif/RDGIF-2.gif";
import TopGames from "@/components/topGames";
import Footer from "@/components/footer";
import Sports from "@/components/sports";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full">
        <Image src={banner} alt="Banner" priority />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[bonus1, bonus4, bonus6].map((image, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={image}
                alt={`Bonus ${index + 1}`}
                //   layout="fill"
                //   objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[gif1, gif2].map((image, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={image}
                alt={`Gif ${index + 1}`}
                className="shadow-lg"
              />
            </div>
          ))}
        </div>
        <TopGames />
        <Sports viewmore={true} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
          <div className="relative w-full">
            <Image
              src={pgBanner}
              alt="PG Banner"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
      <div className="bg-[#045662] text-center p-3">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
