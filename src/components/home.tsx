import Image from "next/image";
import banner from "@/assets/images/main-banner.webp";
import bonus1 from "@/assets/images/bonus-1.webp";
import bonus4 from "@/assets/images/bonus-4.webp";
import bonus6 from "@/assets/images/bonus-6.webp";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full">
        <Image src={banner} alt="Banner" priority />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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
    </>
  );
};

export default HomePage;
