import { useNavigationContext } from "src/hooks";
import { DesktopNavbar } from "./components/DesktopNavbar/DesktopNavbar";
import { MobileNavbar } from "./components/MobileNavbar/MobileNavbar";

export const Navbar = () => {
  const links = useNavigationContext();

  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar links={links} />
      </div>
      <div className="block md:hidden">
        <MobileNavbar links={links} />
      </div>
    </>
  );
};
