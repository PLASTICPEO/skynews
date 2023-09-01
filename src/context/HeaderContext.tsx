import { createContext, useState, useEffect } from "react";
import { NavProviderProps } from "./context.types";
import { NavContextType } from "./context.types";

export const AppContext: React.Context<NavContextType> =
  createContext<NavContextType>({
    toggleSearchField: () => {},
    toggleDropDown: () => {},
    scrollPositionTop: () => {},
    toggleMobileSearchField: () => {},
    isOpenSearchField: false,
    isOpenDropDown: false,
    isOpenMobileSearch: false,
    scrollY: NaN,
  });

const ContextProvider = ({ children }: NavProviderProps) => {
  const [isOpenSearchField, setIsOpenSearch] = useState(false);
  const [isOpenMobileSearch, setIsOpenMobileSearch] = useState<boolean>(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    scrollPositionTop();
  }, []);

  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleMobileSearchField = () => {
    setIsOpenMobileSearch(!isOpenMobileSearch);
  };

  const toggleSearchField = () => {
    setIsOpenDropDown(false);
    setIsOpenSearch(!isOpenSearchField);
  };

  const toggleDropDown = () => {
    setIsOpenSearch(false);
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleScroll = () => {
    setIsOpenSearch(false);
    setIsOpenDropDown(false);
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <AppContext.Provider
      value={{
        scrollY,
        isOpenSearchField,
        isOpenDropDown,
        isOpenMobileSearch,
        toggleMobileSearchField,
        toggleSearchField,
        toggleDropDown,
        scrollPositionTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
