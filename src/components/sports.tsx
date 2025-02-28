import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Match = {
  id: string;
  date: Date;
  competition: string;
  odds: {
    type: string;
    values: [number, number][];
  };
};

const matches: Match[] = [
  {
    id: "1",
    date: new Date("2024-02-14T19:30:00"),
    competition: "Women's Premier League",
    odds: {
      type: "BM",
      values: [
        [250, 300],
        [250, 300],
        [150, 180],
      ],
    },
  },
  {
    id: "2",
    date: new Date("2024-02-19T14:30:00"),
    competition: "ICC Champions Trophy",
    odds: {
      type: "BM",
      values: [
        [2.5, 2.54],
        [5.5, 5.6],
        [4.8, 4.9],
      ],
    },
  },
  {
    id: "3",
    date: new Date("2024-02-25T14:30:00"),
    competition: "Australia v South Africa",
    odds: {
      type: "F",
      values: [
        [1.78, 1.79],
        [0, 0],
        [2.26, 2.28],
      ],
    },
  },
];

export default function Sports({ viewmore }: { viewmore: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      if (container.scrollWidth > container.clientWidth) {
        container.classList.add("overflow-x-auto");
      } else {
        container.classList.remove("overflow-x-auto");
      }
    };

    const observer = new MutationObserver(() => checkOverflow());
    observer.observe(container, { childList: true, subtree: true });

    window.addEventListener("resize", checkOverflow);
    checkOverflow();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);
  return (
    <div className="w-full mb-4 overflow-y-auto custom-scroll">
      <div className="bg-cyan-500 px-4 py-2">
        <h2 className="text-lg font-semibold text-white">Cricket</h2>
      </div>
      <div ref={containerRef} className="whitespace-nowrap custom-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm font-bold">
            <tr>
              <th className="w-[40%] px-4 py-2 text-left"></th>
              <th className="w-[20%] px-1 py-2 text-center">1</th>
              <th className="w-[20%] px-1 py-2 text-center">x</th>
              <th className="w-[20%] px-1 py-2 text-center">2</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {matches.map((match) => (
              <tr
                key={match.id}
                className="border-t hover:bg-gray-50 text-sm font-bold"
              >
                <td className="p-2">
                  <div className="flex flex-col sm:flex-row">
                    <span className="">
                      {format(match.date, "dd MMM HH:mm")} | {match.competition}
                    </span>
                    <span className="inline-flex items-center">
                      {/* <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WN7js5WYyJKojkp31TC41XVgMC8B9S.png"
                        alt={match.odds.type}
                        className="mr-1 h-4 w-4 object-contain"
                      /> */}
                      <span className="text-xs text-gray-500">
                        {match.odds.type}
                      </span>
                    </span>
                  </div>
                </td>
                {[0, 1, 2].map((index) => (
                  <td key={index} className="px-1 min-w-[130px]">
                    <div className="grid grid-cols-2 gap-1 min-w-max">
                      {match.odds.values[index] && (
                        <>
                          <div className="border-r border-t px-1 py-2 w-full min-w-[60px] max-w-[140px] text-center text-sm !bg-[#80C2F1] rounded-lg whitespace-nowrap">
                            {match.odds.values[index][0]}
                          </div>
                          <div className="border-t px-1 py-2 w-full min-w-[60px] max-w-[140px] text-center text-sm !bg-[#FBB7C6] rounded-lg whitespace-nowrap">
                            {match.odds.values[index][1]}
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {viewmore && (
        <div className="flex justify-end p-2 border-t">
          <Link
            className="text-sm text-gray-600 hover:text-gray-900"
            href="/game/4"
          >
            View More...
          </Link>
        </div>
      )}
    </div>
  );
}
