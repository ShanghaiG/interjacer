import { ReactNode, createContext } from "react";
import { NavbarLinkData } from "src/types";

export const NavigationContext = createContext<NavbarLinkData[] | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: ReactNode;
  value: NavbarLinkData[];
}

export const NavigationContextProvider = ({
  children,
  value,
}: NavigationProviderProps) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
