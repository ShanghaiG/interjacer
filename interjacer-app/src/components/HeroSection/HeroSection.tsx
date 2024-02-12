import Divider from "../Divider/Divider";
import { HeroDescription } from "./HeroDescription";
import HeroGrid from "./HeroGrid";
import { gridItems } from "./data";

export const HeroSection = () => {
  return (
    <>
      <HeroDescription />

      <div className="w-4/5 2xl:w-1/2 mx-auto mt-2">
        <Divider />
      </div>

      <div className="w-4/5 2xl:w-1/2 mx-auto mt-6">
        <HeroGrid items={gridItems} />
      </div>
    </>
  );
};
