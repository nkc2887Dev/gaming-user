export interface SubMatch {
  id: string;
  name: string;
}

export interface Tournament {
  id: string;
  name: string;
  matches: SubMatch[];
}

export interface SportCategory {
  id: string;
  name: string;
  tournaments: Tournament[];
  expanded?: boolean;
}

export interface BettingOption {
  id: string;
  label: string;
  category?: string;
}

export const sportsData: SportCategory[] = [
  {
    id: "cricket",
    name: "🏏 Cricket",
    expanded: true,
    tournaments: [
      {
        id: "west-indies",
        name: "West Indies Championship 2025",
        matches: [
          { id: "bj-1", name: "Barbados v Jamaica" },
          { id: "zi-1", name: "Zimbabwe v Ireland" },
          { id: "psa-1", name: "Pakistan v South Africa" },
          { id: "sla-1", name: "Sri Lanka v Australia" },
        ],
      },
      {
        id: "csa-prov",
        name: "CSA Provincial",
        matches: [
          { id: "nwk-1", name: "North West Dragons v Knights" },
          { id: "wpl-1", name: "Western Province v Lions" },
        ],
      },
      {
        id: "wpl",
        name: "Women's Premier League",
        matches: [],
      },
      {
        id: "icc-cwc",
        name: "ICC Cricket World Cup League 2",
        matches: [],
      },
      {
        id: "aus-odi",
        name: "Australia One Day Cup",
        matches: [],
      },
    ],
  },
];
