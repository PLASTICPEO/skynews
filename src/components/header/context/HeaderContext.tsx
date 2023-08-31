import { createContext, useState, useEffect } from "react";
import { NavProviderProps } from "./context.types";
import { NavContextType } from "./context.types";

export const HeaderContext: React.Context<NavContextType> =
  createContext<NavContextType>({
    toggleSearchField: () => {},
    toggleDropDown: () => {},
    scrollPositionTop: () => {},
    isOpenSearchField: false,
    isOpenDropDown: false,
    scrollY: NaN,
  });

const HeaderProvider = ({ children }: NavProviderProps) => {
  const [isOpenSearchField, setIsOpenMobileSearchField] = useState(false);
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

  const toggleSearchField = () => {
    setIsOpenDropDown(false);
    setIsOpenMobileSearchField(!isOpenSearchField);
  };

  const toggleDropDown = () => {
    setIsOpenMobileSearchField(false);
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleScroll = () => {
    setIsOpenMobileSearchField(false);
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
    <HeaderContext.Provider
      value={{
        scrollY,
        isOpenSearchField,
        isOpenDropDown,
        toggleSearchField,
        toggleDropDown,
        scrollPositionTop,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
