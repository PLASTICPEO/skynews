import { ReactNode } from "react";
export interface NavProviderProps {
    children: ReactNode;
}

export interface NavContextType {
    toggleMobileSearchField: () => void;
    isOpenSearchField: boolean;
  }