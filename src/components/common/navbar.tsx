import Image from "next/image";
import Link from "next/link";
import useColorShading from "@/components/common/hooks/useColorShading";
import { Colors } from "@/utils/constants/common";
import { NAVBARMENU } from "@/utils/constants/routes";
import GradientButton from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/images/logo.jpg";
import { useEffect, useRef, useState } from "react";
// import Toast from "./toast";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SportsMenu from "@/components/common/sportsMenu";
import { cn } from "@/lib/utils";
import LoginForm from "@/components/login";
import UserMenu from "./userMenu";

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const userbarRef = useRef<HTMLDivElement | null>(null);
  const [badgePosition, setBadgePosition] = useState<"topRight" | "right">(
    "topRight",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      if (container.scrollWidth > container.clientWidth) {
        container.classList.add("overflow-x-auto");
        setBadgePosition("right");
      } else {
        container.classList.remove("overflow-x-auto");
        setBadgePosition("topRight");
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userbarRef.current &&
        !userbarRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const shadingText = useColorShading("text-white", Colors, 200);
  const shadingTextForbadge = useColorShading(
    "text-white",
    ["text-red-200", "text-red-500"],
    300,
  );

  const isUserLogin = true;

  return (
    <>
      <nav className={`flex items-center flex-col`}>
        <div className="bg-gradient-to-b from-[#033249] to-[#159ab3] text-white p-4 px-5 w-full flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="text-white bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            )}
            <Image src={logo} alt="Logo" priority className="w-44 h-15 rounded-xl" />
          </div>
          {!isUserLogin ? (
            <GradientButton
              className="border !border-[#72BBEF] !bg-gradient-to-b !from-[#55BFD1] !to-[#1B6E81] !rounded-xl w-4/3 font-bold text-sm"
              label="🧑‍🦰 LOG IN"
              onclick={() => setOpenLoginModal(!openLoginModal)}
            />
          ) : (
            <div className="grid gap-1">
              <GradientButton
                className="border !border-[#72BBEF] rounded-lg w-15 py-0"
                label={"635.00"}
                size="sm"
                onclick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
              <GradientButton
                className="border !border-[#72BBEF] rounded-lg w-15 py-0"
                label={`Exp:${"0.00"}`}
                size="sm"
                onclick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />
            </div>
          )}
        </div>
        <div
          ref={containerRef}
          className="flex items-center text-white text-sm font-bold w-full bg-[#045662] whitespace-nowrap custom-scrollbar"
        >
          {NAVBARMENU.map((item, index) => {
            const textColor = [2, 3].includes(index)
              ? `text-${shadingText}`
              : "text-white";
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`p-2 hover:bg-[#159ab3] ${textColor} relative`}
              >
                {badgePosition === "right" ? (
                  <h3 className="text-center">{item.symbol}</h3>
                ) : (
                  ""
                )}
                <span>{item.name}</span>
                <Badge position={badgePosition}>
                  <span
                    className={`${shadingTextForbadge} text-[50%] px-1 h-4 w-5 rounded-l-sm bg-[#FFFFFF] ${shadingTextForbadge}`}
                  >
                    LIVE
                  </span>
                  <span
                    className={`text-[#FFFFFF] text-[75%] px-1 h-4 w-4 rounded-r-sm bg-[#FF0000] text-[#FFFFFF]`}
                  >
                    {1}
                  </span>
                </Badge>
              </Link>
            );
          })}
        </div>
      </nav>
      {/* Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed left-0 w-64 bg-[#008fb3] transition-transform duration-300 z-[999]",
          "top-21 h-[calc(100vh-3.5rem)]", // Default for desktop
          "md:top-21 md:h-[calc(100vh-3.5rem)]", // Adjust for tablets
          "sm:top-21 sm:h-[calc(100vh-3rem)]", // Adjust for smaller screens
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex h-full flex-col text-white">
          <SportsMenu
            isMobile={isMobile}
            setIsMenuOpen={setIsMenuOpen}
            // isMenuOpen={isMenuOpen}
          />
        </nav>
      </div>
      <div
        ref={userbarRef}
        className={cn(
          "fixed right-0 top-0 w-64 bg-[#045662] transition-transform duration-300 z-[999]",
          isUserMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex h-full flex-col text-white">
          <UserMenu setIsMenuOpen={setIsUserMenuOpen} />
        </nav>
      </div>
      {openLoginModal && (
        <LoginForm
          isOpen={openLoginModal}
          onClose={() => setOpenLoginModal(false)}
        />
      )}
    </>
  );
}
