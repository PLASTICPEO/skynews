import { createContext, useState } from "react";
import { NavProviderProps } from "./context.types";
import { NavContextType } from "./context.types";

export const HeaderContext: React.Context<NavContextType> =
  createContext<NavContextType>({
    toggleMobileSearchField: () => {},
    isOpenSearchField: false,
  });

const HeaderProvider = ({ children }: NavProviderProps) => {
  const [isOpenSearchField, setIsOpenMobileSearchField] = useState(false);

  const toggleMobileSearchField = () => {
    setIsOpenMobileSearchField(!isOpenSearchField);
  };

  return (
    <HeaderContext.Provider
      value={{ isOpenSearchField, toggleMobileSearchField }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
