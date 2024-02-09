import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { NavbarLinkData } from "src/types";
import { twJoin, twMerge } from "tailwind-merge";

interface MobileNavbarButtonProps {
  linkData: NavbarLinkData;
}

export const MobileNavbarButton = ({ linkData }: MobileNavbarButtonProps) => {
  const resolvedPath = useResolvedPath(linkData.to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <NavLink to={linkData.to}>
      <div className="bg-white/20  mx-2 rounded h-full flex fle-row duration-150">
        <div
          className={twJoin(
            "rounded-l h-full bg-lime-500 duration-150",
            isActive ? "w-2" : "w-0 bg-transparent"
          )}
        />
        <div className="flex flex-row py-2 items-center pl-3 gap-2">
          {linkData.icon && (
            <div className="text-lime-500 text-2xl">{linkData.icon}</div>
          )}
          <div
            className={twMerge(
              "text-neutral-100 font-medium",
              linkData.className
            )}
          >
            {linkData.name}
          </div>
        </div>
      </div>
    </NavLink>
  );
};
