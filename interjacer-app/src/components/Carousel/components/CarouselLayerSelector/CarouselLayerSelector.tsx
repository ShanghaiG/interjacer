import { twJoin } from "tailwind-merge";

interface CarouselLayerSelectorProps {
  numberOfLayers: number;
  onClick: (val: number) => void;
  selectedLayer: number;
}

export const CarouselLayerSelector = ({
  numberOfLayers,
  onClick,
  selectedLayer,
}: CarouselLayerSelectorProps) => {
  return (
    <div
      className="absolute bottom-5 h-[25px] left-1/2 translate-x-[-50%] z-50 select-none cursor-pointer"
      style={{ width: `${numberOfLayers * 35}px` }}
    >
      {Array.from({ length: numberOfLayers }).map((_, index) => (
        <div
          key={index}
          className={twJoin(
            "w-[20px] h-[20px] absolute rounded-full duration-150 flex justify-center items-center border-8",
            index === selectedLayer
              ? "bg-slate-800 border-slate-100"
              : "bg-slate-100 border-slate-800"
          )}
          style={{
            left: `${index * 35}px`,
          }}
          onClick={() => onClick(index)}
        ></div>
      ))}
    </div>
  );
};
