import { Carousel } from "src/components";
import slider1 from "src/assets/slider-1.jpg";
import slider2 from "src/assets/slider-2.jpg";
import slider3 from "src/assets/slider-3.jpg";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w- m-auto overflow-hidden">
      <Carousel
        layersData={[
          { title: "DLA CIEBIE", backgroundURL: slider1 },
          { title: "DLA RODZINY", backgroundURL: slider2 },
          { title: "DLA FIRMY", backgroundURL: slider3 },
        ]}
      />
      <div className="h-[200px]"></div>
    </div>
  );
};
