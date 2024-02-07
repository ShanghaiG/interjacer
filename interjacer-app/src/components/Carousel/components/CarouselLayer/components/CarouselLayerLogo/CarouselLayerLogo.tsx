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
    <div className="absolute md:top-[20%] md:translate-y-[-50%] sm:top-[30%] sm:translate-y-[-50%] md:scale-100 scale-75 top-[20%] translate-y-[-50%] z-50 overflow-hidden">
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
