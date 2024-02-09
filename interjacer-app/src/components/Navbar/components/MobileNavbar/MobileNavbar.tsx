import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logoWithText from "src/assets/logo-interjacer-text.png";
import { useClickOutside, useTimers } from "src/hooks";
import { NavbarLinkData } from "src/types";
import { twJoin } from "tailwind-merge";

import { MobileNavbarMenu } from "./components/MobileNavbarMenu/MobileNavbarMenu";

interface MobileNavbarProps {
  links: NavbarLinkData[];
  transitionDuration?: number;
}

export const MobileNavbar = ({
  links,
  transitionDuration = 200,
}: MobileNavbarProps) => {
  const [isOpen, setOpen] = useState(false);
  const [isLocalOpen, setLocalOpen] = useState(isOpen);
  const menuRef = useClickOutside(() => setOpen(false));
  const { newTimer } = useTimers();
  useEffect(() => {
    if (isOpen) {
      newTimer(() => setLocalOpen(true), 0);
    } else {
      newTimer(() => setLocalOpen(false), transitionDuration);
    }
  }, [transitionDuration, isOpen, newTimer]);

  return (
    <div
      className="fixed w-full h-16 flex z-[100] bg-white shadow"
      ref={menuRef}
    >
      <div className="relative w-full h-full">
        <Link
          to={"/"}
          className="flex items-center justify-center h-full w-full"
        >
          <img src={logoWithText} className="h-10 sm:h-12" />
        </Link>
        <IoMenu
          className={twJoin(
            "absolute text-lime-600 top-1/2 translate-y-[-50%]  cursor-pointer",
            "text-4xl sm:text-5xl right-5"
          )}
          onClick={() => setOpen((prev) => !prev)}
        />
        {(isOpen || isLocalOpen) && (
          <div
            className={twJoin(
              isOpen && !isLocalOpen ? "opacity-0 scale-0" : "",
              isOpen && isLocalOpen ? "opacity-100" : "",
              !isOpen && isLocalOpen ? "opacity-0 scale-0" : ""
            )}
            style={{ transitionDuration: `${transitionDuration}ms` }}
          >
            <MobileNavbarMenu links={links} />
          </div>
        )}
      </div>
    </div>
  );
};
