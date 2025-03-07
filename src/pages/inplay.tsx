import Sports from "@/components/sports";
import SportsMenu from "@/components/common/sportsMenu";
import React from "react";
import useDevice from "@/components/common/hooks/useDevice";

const Header = [
  { title: "Matched Bet", space: 50 },
  { title: "Odds", space: 25 },
  { title: "Stake", space: 25 },
];

const data = [
  {
    username: "testsuperadmin123",
    creditReference: "50.00",
    balance: "50.00",
  },
];

const InPlay = () => {
  const isMobile = useDevice();

  return (
    <div className="relative w-full pt-[5vh] flex gap-2 flex-col md:flex-row p-2 md:pt-[5vh]">
      {!isMobile && (
        <nav className="flex h-full flex-col text-white">
          <SportsMenu isMobile={true} setIsMenuOpen={() => true} />
        </nav>
      )}
      <div className="flex-grow basis-[65%] md:basis-[70%]">
        <Sports viewmore={false} />
      </div>
      <div className="flex-grow basis-[35%] md:basis-[30%] bg-white h-[100vh] overflow-y-auto custom-scroll">
        <div className="px-3 py-2 text-xl text-white !bg-gradient-to-b !from-[#55BFD1] !to-[#1B6E81]">
          Matched Bet
        </div>
        <div className="overflow-x-auto py-2">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-[#016A82] text-white text-left">
                {Header.map(({ title, space }, index) => (
                  <th
                    key={index}
                    style={{ width: `${space}%` }}
                    className="p-2 text-lg font-bold border-r"
                  >
                    <span className="text-nowrap">{title}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-gray-300">
                    {Header.map(({}, colIndex) => {
                      const key = Object.keys(data[0])[
                        colIndex
                      ] as keyof typeof item;
                      return (
                        <td
                          key={colIndex}
                          className="px-4 py-2 text-center border-r"
                        >
                          {item[key] || "--"}
                        </td>
                      );
                    })}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={Header.length}
                    className="px-6 py-3 text-center text-gray-500"
                  >
                    No Data Found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InPlay;
