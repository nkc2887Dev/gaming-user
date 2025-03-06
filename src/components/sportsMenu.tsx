"use client";

import {
  ArrowBigDownDash,
  SquareMinus,
  SquarePlus,
  SquareX,
} from "lucide-react";
import { sportsData } from "@/lib/menu-data";
import { useState } from "react";
import { useRouter } from "next/router";
import { NAVBARMENU } from "@/utils/constants/routes";
import Link from "next/link";
import { ISportsMenu } from "@/@types/common";

export default function SportsMenu({ isMobile, setIsMenuOpen }: ISportsMenu) {
  const [expandedSports, setExpandedSports] = useState<string[]>([]);
  const [expandedTournaments, setExpandedTournaments] = useState<string[]>([]);
  const router = useRouter();

  const toggleSport = (sportId: string) => {
    setExpandedSports((prev) =>
      prev.includes(sportId)
        ? prev.filter((id) => id !== sportId)
        : [...prev, sportId],
    );
  };

  const toggleTournament = (tournamentId: string) => {
    setExpandedTournaments((prev) =>
      prev.includes(tournamentId)
        ? prev.filter((id) => id !== tournamentId)
        : [...prev, tournamentId],
    );
  };

  const handleClick = (path: string) => {
    console.log("router.pathname: ", router.pathname);
    setIsMenuOpen(false);
    if (router.pathname !== path) {
      router.push(path);
    }
  };

  return (
    <div className="w-full bg-white text-white min-h-screen md:w-64">
      {isMobile && (
        <div className="">
          {NAVBARMENU.map(({ name, symbol, link }) => (
            <Link
              key={link}
              className="w-full border-b border-[#159ab3] flex items-center justify-between p-3 text-black hover:bg-[#42C2E2] hover:text-white  transition-colors"
              href={link}
              onClick={() => handleClick(link)}
            >
              <div className="flex items-center gap-3">
                <span className="text-md font-bold">
                  {symbol} {name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {sportsData.map((sport) => (
        <div key={sport.id} className="border-b border-[#159ab3] text-black ">
          <button
            onClick={() => toggleSport(sport.id)}
            className="w-full flex items-center justify-between p-3 hover:bg-[#42C2E2] hover:text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-md font-bold">{sport.name}</span>
            </div>
            {sport.tournaments.length > 0 && (
              <ArrowBigDownDash
                className={`h-5 w-5 transition-transform ${
                  expandedSports.includes(sport.id) ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {expandedSports.includes(sport.id) &&
            sport.tournaments.length > 0 && (
              <div className="bg-[#d2dcf6] text-black">
                {sport.tournaments.map((tournament) => (
                  <div key={tournament.id}>
                    <button
                      onClick={() => toggleTournament(tournament.id)}
                      className="w-full flex items-center p-3 text-sm hover:bg-white/10 transition-colors"
                    >
                      {expandedTournaments.includes(tournament.id) ? (
                        <SquareMinus className="h-4 w-4 mr-3" />
                      ) : (
                        <SquarePlus className="h-4 w-4 mr-3" />
                      )}
                      {tournament.name}
                    </button>

                    {expandedTournaments.includes(tournament.id) && (
                      <div className="pl-8">
                        {tournament.matches.map((match) => (
                          <div
                            key={match.id}
                            className="flex items-center p-3 text-sm hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <SquareX className="h-4 w-4 mr-3 text-gray-500" />
                            <span>{match.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
