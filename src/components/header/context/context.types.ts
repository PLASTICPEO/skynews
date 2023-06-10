import { ReactNode } from "react";
export interface NavProviderProps {
    children: ReactNode;
}

export interface NavContextType {
    toggleMobileSearchField: () => void;
    toggleDropDown: () => void;
    isOpenSearchField: boolean;
    isOpenDropDown: boolean;
  }