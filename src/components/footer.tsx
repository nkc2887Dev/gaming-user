import Image from "next/image";
import evolution from "@/assets/images/company/evolution.png";
import ezugi from "@/assets/images/company/ezugi.png";
import pragmaticlive from "@/assets/images/company/pragmatic-live.png";
import betgames from "@/assets/images/company/betgames.png";
import ssg from "@/assets/images/company/ssg.png";
import betsoft from "@/assets/images/company/betsoft.png";
import spribe from "@/assets/images/company/spribe.png";
import Evoplay from "@/assets/images/company/Evoplay.png";
import logo18plus from "@/assets/images/company/logo-18plus.svg";
import Link from "next/link";

const images = [
  { src: evolution, alt: "Evolution" },
  { src: ezugi, alt: "Ezugi" },
  { src: pragmaticlive, alt: "Pragmatic Live" },
  { src: betgames, alt: "Betgames" },
  { src: ssg, alt: "Super Spade Games" },
  { src: betsoft, alt: "Betsoft" },
  { src: spribe, alt: "Spribe" },
  { src: Evoplay, alt: "Evoplay" },
  { src: logo18plus, alt: "+18" },
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {images.map(({ src, alt }, index) => (
          <div
            key={index}
            className="w-[110px] h-[50px] md:w-[91px] md:h-[43px] lg:w-[110px] lg:h-[50px] last:li"
          >
            <Link href="/#" onClick={(e) => e.preventDefault()}>
              <Image
                src={src}
                alt={alt}
                width={110}
                height={50}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
      <p className="text-xs text-white font-semibold mt-2 text-wrap">
        You must be over 18 years old, or the legal age at which gambling or
        gaming activities are allowed under the law or jurisdiction that applies
        to you. You must reside in a country in which access to online gambling
        to its residents.
      </p>
    </>
  );
};

export default Footer;
