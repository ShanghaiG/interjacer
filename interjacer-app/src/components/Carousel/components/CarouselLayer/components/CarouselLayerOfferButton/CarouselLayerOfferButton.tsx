import { twJoin } from "tailwind-merge";

interface CarouselLayerOfferButtonProps {
  isShow: boolean;
  isLocalShow: boolean;
}

export const CarouselLayerOfferButton = ({
  isShow,
  isLocalShow,
}: CarouselLayerOfferButtonProps) => {
  return (
    <div className="absolute z-50 bottom-1/4 translate-y-[25%] overflow-hidden">
      <div
        className={twJoin(
          "duration-[1000ms]",
          !isShow && isLocalShow ? "translate-y-full opacity-50" : ""
        )}
      >
        <button
          className={twJoin(
            "h-10 px-5 text-xl font-semibold duration-150",
            "bg-transparent hover:bg-white hover:border-0 border-2 text-white hover:text-black"
          )}
        >
          OFERTA
        </button>
      </div>
    </div>
  );
};
