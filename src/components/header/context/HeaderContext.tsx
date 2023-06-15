import { createContext, useState, useEffect } from "react";
import { NavProviderProps } from "./context.types";
import { NavContextType } from "./context.types";

export const HeaderContext: React.Context<NavContextType> =
  createContext<NavContextType>({
    isScrolled: false,
    prevScrollPos: NaN,
    toggleSearchField: () => {},
    toggleDropDown: () => {},
    scrollPositionTop: () => {},
    isOpenSearchField: false,
    isOpenDropDown: false,
  });

const HeaderProvider = ({ children }: NavProviderProps) => {
  const [isOpenSearchField, setIsOpenMobileSearchField] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    scrollPositionTop();
  }, []);

  const scrollPositionTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleSearchField = () => {
    setIsOpenDropDown(false);
    setIsOpenMobileSearchField(!isOpenSearchField);
  };

  const toggleDropDown = () => {
    setIsOpenMobileSearchField(false);
    setIsOpenDropDown(!isOpenDropDown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpenDropDown(false);
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    console.log(isScrolled, prevScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <HeaderContext.Provider
      value={{
        isScrolled,
        prevScrollPos,
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
