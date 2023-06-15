import { ReactNode } from "react";


export interface NavProviderProps {
    children: ReactNode;
}

export interface NavContextType {
    prevScrollPos: number;
    isScrolled: boolean;
    toggleSearchField: () => void;
    toggleDropDown: () => void;
    scrollPositionTop: () => void;
    isOpenSearchField: boolean;
    isOpenDropDown: boolean;
  }