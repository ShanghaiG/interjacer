import { twJoin } from "tailwind-merge";
import logoInterJacer from "src/assets/logo-interJacer.png";

interface CarouselLayerLogoProps {
  isShow: boolean;
  isLocalShow: boolean;
}

export const CarouselLayerLogo = ({
  isShow,
  isLocalShow,
}: CarouselLayerLogoProps) => {
  return (
    <div className="absolute top-1/4 translate-y-[-25%] z-50 overflow-hidden">
      <img
        src={logoInterJacer}
        className={twJoin(
          "duration-[1000ms]",
          !isShow && isLocalShow ? "translate-y-full opacity-50" : ""
        )}
      />
    </div>
  );
};
