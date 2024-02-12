import { Carousel } from "src/components";
import slider1 from "src/assets/slider-1.jpg";
import slider2 from "src/assets/slider-2.jpg";
import slider3 from "src/assets/slider-3.jpg";
import { HeroSection } from "src/components/HeroSection/HeroSection";
import { StatsSection } from "src/components/Stats/Stats";

export const LandingPage = () => {
  const statsData = [
    {
      icon: "👥",
      number: 1000,
      label: "Zadowolonych klientów",
    },
    {
      icon: "⏱️",
      number: 24,
      label: "Godziny wsparcia",
    },
    {
      icon: "🚀",
      number: 50,
      label: "Uruchomionych projektów",
    },
    {
      icon: "💡",
      number: 75,
      label: "Innowacyjnych rozwiązań",
    },
  ];

  return (
    <>
      <div className="flex flex-col w- m-auto overflow-hidden">
        <Carousel
          layersData={[
            { title: "DLA CIEBIE", backgroundURL: slider1 },
            { title: "DLA RODZINY", backgroundURL: slider2 },
            { title: "DLA FIRMY", backgroundURL: slider3 },
          ]}
        />
        {/* <div className="h-[200px]"></div> */}
      </div>

      <div className="flex flex-col m-auto">
        <HeroSection />
      </div>
      <div className="flex flex-col m-auto">
        <StatsSection stats={statsData} />
      </div>
    </>
  );
};
