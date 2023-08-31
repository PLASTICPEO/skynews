import { ReactNode } from "react";

export interface NavProviderProps {
  children: ReactNode;
}

export interface NavContextType {
  toggleSearchField: () => void;
  toggleDropDown: () => void;
  scrollPositionTop: () => void;
  isOpenSearchField: boolean;
  isOpenDropDown: boolean;
  scrollY: number;
}
