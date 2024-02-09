import { FaPhone } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Footer, Navbar } from "src/components";
import { NavigationContextProvider } from "src/contexts";
import { PublicRoute } from "src/routes/public/PublicRoute";
import { NavbarLinkData } from "src/types";

const links: NavbarLinkData[] = [
  { name: "O FIRMIE", to: "o-firmie" },
  { name: "PRODUKTY", to: "produkty" },
  { name: "WSPÓŁPRACA", to: "wspolpraca" },
  { name: "DOSTAWA", to: "dostawa", icon: <TbTruckDelivery /> },
  {
    name: "KONTAKT",
    to: "kontakt",
    className: "text-lime-500",
    icon: <FaPhone className="text-lg" />,
  },
];
console.log(1);

export const PublicLayout = () => {
  return (
    <NavigationContextProvider value={links}>
      <div className="flex flex-col justify-between h-full">
        <Navbar />
        <div className="mt-16">
          <PublicRoute />
        </div>
        <Footer />
      </div>
    </NavigationContextProvider>
  );
};
