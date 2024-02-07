import { NavbarButton } from "./components/NavbarButton";

export const Navbar = () => {
  return (
    <div className="bg-white h-16 shadow-sm flex justify-center">
      <div className="max-w-7xl w-screen flex justify-between items-center">
        <div>NavigationBar</div>
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
