import { NavbarButton } from "./components/NavbarButton";
import logoWithText from "src/assets/logo-interjacer-text.png";
export const Navbar = () => {
  return (
    <div className="bg-white h-16 shadow flex justify-center fixed top-0 w-full z-[100]">
      <div className="max-w-7xl w-screen flex justify-between items-center">
        <img src={logoWithText} className="h-12 ml-5" />
        <div className="flex flex-row h-full">
          <NavbarButton text="Home" />
          <NavbarButton text="O firmie" />
          <NavbarButton text="Produkty" />
          <NavbarButton text="Współpraca" />
          <NavbarButton text="Dostawa" />
          <NavbarButton text="Kontakt" className="text-lime-500" />
        </div>
      </div>
    </div>
  );
};
