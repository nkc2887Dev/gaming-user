"use client";

import {
  FileText,
  BarChart2,
  History,
  Clock,
  Settings,
  Lock,
  List,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  username?: string;
  balance?: number;
}

export default function UserMenu({
  setIsMenuOpen,
  username = "101radhe",
  balance = 635.0,
}: UserMenuProps) {
  const router = useRouter();

  const handleClick = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const menuItems = [
    {
      name: "Account Statement",
      icon: <FileText className="w-5 h-5" />,
      link: "/account-statement",
    },
    {
      name: "Profit Loss Report",
      icon: <BarChart2 className="w-5 h-5" />,
      link: "/profit-loss",
    },
    {
      name: "Bet History",
      icon: <History className="w-5 h-5" />,
      link: "/bet-history",
    },
    {
      name: "Unsettled Bet",
      icon: <Clock className="w-5 h-5" />,
      link: "/unsettled-bet",
    },
    {
      name: "Set Stake",
      icon: <Settings className="w-5 h-5" />,
      link: "/set-stake",
    },
    { name: "Rules", icon: <List className="w-5 h-5" />, link: "/rules" },
    {
      name: "Change Password",
      icon: <Lock className="w-5 h-5" />,
      link: "/change-password",
    },
    {
      name: "Results",
      icon: <FileText className="w-5 h-5" />,
      link: "/results",
    },
    { name: "Logout", icon: <LogOut className="w-5 h-5" />, link: "/logout" },
  ];

  return (
    <div className="w-full text-white min-h-screen md:w-64 bg-[#045662]">
      {/* Close button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* User info */}
      <div className="px-4 py-2 border-b border-[#159ab3]">
        <div className="flex items-center gap-2">
          <span className="text-yellow-300">👤</span>
          <span className="font-medium">
            {username} - ({balance.toFixed(2)})
          </span>
        </div>
      </div>

      {/* Exposure and P&L boxes */}
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="bg-[#159ab3] rounded p-2 border border-white">
          <div className="text-center font-bold">Exposure</div>
          <div className="text-center">0.00</div>
        </div>
        <div className="bg-[#159ab3] rounded p-2 border border-white">
          <div className="text-center font-bold">P&L</div>
          <div className="text-center text-red-500">-{balance.toFixed(2)}</div>
        </div>
      </div>

      {/* Menu items */}
      <div className="mt-2">
        {menuItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={`w-full border-b border-[#159ab3] flex items-center gap-3 p-3 text-white hover:bg-[#42C2E2] transition-colors`}
            onClick={() => handleClick(item.link)}
          >
            <span className="text-yellow-300">{item.icon}</span>
            <span className="text-md">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
