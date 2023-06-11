import { createContext, useState } from "react";
import { NavProviderProps } from "./context.types";
import { NavContextType } from "./context.types";

export const HeaderContext: React.Context<NavContextType> =
  createContext<NavContextType>({
    toggleSearchField: () => {},
    toggleDropDown: () => {},
    isOpenSearchField: false,
    isOpenDropDown: false,
  });

const HeaderProvider = ({ children }: NavProviderProps) => {
  const [isOpenSearchField, setIsOpenMobileSearchField] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const toggleSearchField = () => {
    setIsOpenDropDown(false);
    setIsOpenMobileSearchField(!isOpenSearchField);
  };

  const toggleDropDown = () => {
    setIsOpenMobileSearchField(false);
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <HeaderContext.Provider
      value={{
        isOpenSearchField,
        isOpenDropDown,
        toggleSearchField,
        toggleDropDown,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
