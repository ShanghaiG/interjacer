import { useEffect, useState } from "react";
import { useTimers } from "src/hooks";
import { twJoin } from "tailwind-merge";

interface CarouselLayerProps {
  title: string;
  isShow: boolean;
  backgroundURL: string;
}

export const CarouselLayer = ({
  title,
  backgroundURL,
  isShow,
}: CarouselLayerProps) => {
  const [isLocalOpen, setLocalOpen] = useState(isShow);
  const { newTimer, clearAllTimers } = useTimers();
  useEffect(() => {
    if (isShow && !isLocalOpen) {
      newTimer(() => setLocalOpen(true), 50);
    }

    if (!isShow && isLocalOpen) {
      newTimer(() => setLocalOpen(false), 1000);
    }
  }, [clearAllTimers, isLocalOpen, isShow, newTimer]);

  useEffect(() => clearAllTimers);

  return (
    <div
      className={twJoin(
        "absolute w-full h-full flex justify-center items-center text-3xl duration-[1500ms] select-none",
        !isShow && !isLocalOpen ? "hidden" : "",
        !isShow && isLocalOpen ? "scale-50 opacity-0 z-20" : "",
        isShow && isLocalOpen ? "" : "",
        isShow && !isLocalOpen ? "scale-150 opacity-0 z-10" : ""
      )}
    >
      <img
        src={backgroundURL}
        alt=""
        className="h-full w-full object-cover absolute"
      />
      <div className="relative">{title}</div>
    </div>
  );
};
