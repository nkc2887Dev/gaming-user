export const ROUTES = {
  HOME: "/home",
  INPLAY: "/inplay",
  WPLWINNER: "/wplwinner",
  ICC2025: "/icc2025",
  GAME: "/game",
  LOGIN: "/login",
  CRICKET: "/game/4",
};

export const NAVBARMENU = [
  { name: "Home", symbol: "🏠", link: ROUTES.HOME },
  { name: "In-Play", symbol: "▶️", link: ROUTES.INPLAY },
  { name: "WPL 2025", symbol: "🏆", link: ROUTES.WPLWINNER },
  { name: "ICC Champions", symbol: "🏆", link: ROUTES.ICC2025 },
  { name: "Cricket", symbol: "🏏", link: ROUTES.CRICKET },
];

export const USERMENU_ROUTES = {
  ACCOUNT_STATEMENT: "/account-statement",
  PROFIT_LOSS: "/profit-loss",
  BET_HISTORY: "/bet-history",
  UNSETTLED_BET: "/unsettled-bet",
  SET_STAKE: "/set-stake",
  RULES: "/rules",
  CHANGE_PASSWORD: "/change-password",
  RESULTS: "/results",
  LOGOUT: "/logout",
};

export const USERMENU_ITEMS = [
  {
    name: "Account Statement",
    link: USERMENU_ROUTES.ACCOUNT_STATEMENT,
  },
  {
    name: "Profit Loss Report",
    link: USERMENU_ROUTES.PROFIT_LOSS,
  },
  {
    name: "Bet History",
    link: USERMENU_ROUTES.BET_HISTORY,
  },
  {
    name: "Unsettled Bet",
    link: USERMENU_ROUTES.UNSETTLED_BET,
  },
  {
    name: "Set Stake",
    link: USERMENU_ROUTES.SET_STAKE,
  },
  {
    name: "Rules",
    link: USERMENU_ROUTES.RULES,
  },
  {
    name: "Change Password",
    link: USERMENU_ROUTES.CHANGE_PASSWORD,
  },
  {
    name: "Results",
    link: USERMENU_ROUTES.RESULTS,
  },
  {
    name: "Logout",
    link: USERMENU_ROUTES.LOGOUT,
  },
];
