import { CarouselLayerData } from "src/types";
import { CarouselLayer } from "./components/CarouselLayer/CarouselLayer";
import { useEffect, useRef, useState } from "react";
import { useTimers } from "src/hooks";
import { twJoin } from "tailwind-merge";
import { CarouselButton } from "./components/CarouselButton/CarouselButton";

interface CarouselProps {
  layersData: CarouselLayerData[];
}

export const Carousel = ({ layersData }: CarouselProps) => {
  const [indexToShow, setIndexToShow] = useState(0);
  const [selectedLayer, setSelectedLayer] = useState(0);
  const { newTimer, clearAllTimers } = useTimers();
  const lastLayerChange = useRef<number>(new Date().getTime());
  useEffect(() => {
    newTimer(() => {
      setIndexToShow(selectedLayer);
      lastLayerChange.current = new Date().getTime();
    }, Math.max(lastLayerChange.current + 1500 - new Date().getTime(), 0) + 150);
    return clearAllTimers;
  }, [clearAllTimers, newTimer, selectedLayer]);

  return (
    <div className="relative w-screen bg-white h-[400px] overflow-hidden group">
      <CarouselButton
        site={"LEFT"}
        onClick={() =>
          setSelectedLayer((prev) => (prev - 1) % layersData.length)
        }
      />

      <CarouselButton
        site={"RIGHT"}
        onClick={() =>
          setSelectedLayer((prev) => (prev + 1) % layersData.length)
        }
      />
      {layersData.map((item, index) => (
        <CarouselLayer
          key={index}
          title={item.title}
          backgroundURL={item.backgroundURL}
          isShow={indexToShow === index}
        />
      ))}

      <div
        className="absolute bottom-0 h-[25px] left-1/2 translate-x-[-50%] pointer-events-none select-none"
        style={{ width: `${layersData.length * 35}px` }}
      >
        {layersData.map((_, index) => (
          <div
            key={index}
            className={twJoin(
              "w-[25px] h-[25px] absolute rounded-full",
              index === selectedLayer ? "bg-red-500" : "bg-blue-500"
            )}
            style={{
              left: `${index * 35}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
