import { NavbarLinkData } from "src/types";
import { MobileNavbarButton } from "../MobileNavbarButton/MobileNavbarButton";

interface MobileNavbarMenuProps {
  links: NavbarLinkData[];
}

export const MobileNavbarMenu = ({ links }: MobileNavbarMenuProps) => {
  return (
    <div className="w-full flex justify-center mt-2">
      <div className="bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-lg shadow-lg flex flex-col gap-3 w-11/12 py-3">
        {links.map((item, index) => (
          <div key={index} className="w-full">
            <MobileNavbarButton linkData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
