import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface NavbarButtonProps {
  text: string;
  to: string;
  className?: string;
}

export const NavbarButton = ({ text, className, to }: NavbarButtonProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          "flex items-center duration-300 cursor-pointer",
          "hover:text-white text-slate-500 hover:bg-lime-500 bg-white",
          "h-full px-2 font-medium text border-lime-500",
          isActive ? "border-b-4" : "",
          className
        )
      }
    >
      {text}
    </NavLink>
  );
};
