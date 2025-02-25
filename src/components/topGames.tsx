"use client";
import Image from "next/image";

import topgame1 from "@/assets/images/topgame1.webp";
import topgame2 from "@/assets/images/topgame2.webp";
import topgame3 from "@/assets/images/topgame3.webp";
import topgame4 from "@/assets/images/topgame4.webp";
import topgame5 from "@/assets/images/topgame5.webp";
import topgame6 from "@/assets/images/topgame6.webp";
import topgame7 from "@/assets/images/topgame7.webp";
import topgame8 from "@/assets/images/topgame8.webp";
import topgame9 from "@/assets/images/topgame9.webp";

const images = [topgame1, topgame2, topgame3, topgame4, topgame5, topgame6, topgame7, topgame8, topgame9];

export default function TopGames() {
  return (
    <div className="w-full overflow-hidden bg-white mb-4">
      <h1 className="text-md font-bold">Top Games</h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...images, ...images].map((img, index) => (
            <div key={index} className="flex-shrink-0 mx-1">
              <Image src={img} alt={`Game ${index + 1}`} width={150} height={80} className="rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
