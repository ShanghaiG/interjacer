import { Link } from "react-router-dom";
import logoWithText from "src/assets/logo-interjacer-text.png";
import { NavbarLinkData } from "src/types";
import { NavbarButton } from "./components/NavbarButton/NavbarButton";

interface DesktopNavbarProps {
  links: NavbarLinkData[];
}

export const DesktopNavbar = ({ links }: DesktopNavbarProps) => {
  return (
    <div className="bg-white h-16 shadow flex justify-center fixed top-0 w-full z-[100]">
      <div className="max-w-7xl w-screen flex justify-between items-center px-2">
        <Link to={"/"}>
          <img src={logoWithText} className="h-12 ml-5" />
        </Link>
        <div className="flex flex-row h-full">
          {links.map((item, index) => (
            <NavbarButton
              key={index}
              to={item.to}
              text={item.name}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
