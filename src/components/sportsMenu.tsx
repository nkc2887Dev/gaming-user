"use client";

import {
  ArrowBigDownDash,
  SquareMinus,
  SquarePlus,
  SquareX,
} from "lucide-react";
import { sportsData } from "@/lib/menu-data";
import { Dispatch, SetStateAction, useState } from "react";

interface ISportsMenu {
  isMobile?: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export default function SportsMenu({ }: ISportsMenu) {
  const [expandedSports, setExpandedSports] = useState<string[]>([]);
  const [expandedTournaments, setExpandedTournaments] = useState<string[]>([]);

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

  return (
    <div className="w-full bg-[#008fb3] text-white min-h-screen md:w-64">

      {sportsData.map((sport) => (
        <div key={sport.id} className="border-b border-[#159ab3]">
          <button
            onClick={() => toggleSport(sport.id)}
            className="w-full flex items-center justify-between p-3 hover:bg-[#42C2E2] transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-base font-medium">{sport.name}</span>
            </div>
            <ArrowBigDownDash
              className={`h-5 w-5 text-white transition-transform ${
                expandedSports.includes(sport.id) ? "rotate-180" : ""
              }`}
            />
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
