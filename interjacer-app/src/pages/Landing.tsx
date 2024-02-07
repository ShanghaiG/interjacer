import { Carousel, Navbar } from "src/components";
import slider1 from "src/assets/slider-1.jpg";
import slider2 from "src/assets/slider-2.jpg";
import slider3 from "src/assets/slider-3.jpg";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w- m-auto">
      <Navbar />
      <Carousel
        layersData={[
          { title: "Layer 1", backgroundURL: slider1 },
          { title: "Layer 2", backgroundURL: slider2 },
          { title: "Layer 3", backgroundURL: slider3 },
        ]}
      />
    </div>
  );
};
