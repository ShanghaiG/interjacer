import { useContext } from "react";
import { NavigationContext } from "src/contexts";

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must by used within a NavigationContextProvider"
    );
  }

  return context;
};
