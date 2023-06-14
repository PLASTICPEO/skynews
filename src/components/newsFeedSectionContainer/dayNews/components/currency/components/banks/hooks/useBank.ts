import React, { useState } from "react";
import { BankTypes } from "../bank.types";

export const useBank = () => {
    const [selectedBank, setSelectedBank] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const banks: BankTypes[] = [
      {
        id: "1",
        label: "ეროვნული ბანკი",
      },
      {
        id: "2",
        label: "თიბისი ბანკი",
      },
      {
        id: "3",
        label: "პროკრედიტ ბანკი",
      },
    ];
  
    const handleBankClick = (id: string) => {
      console.log(id);
      setSelectedBank(id);
      setIsDropdownOpen(false);
    };
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const dropdownLanguages = banks.filter((bank) => bank.id !== selectedBank);

    return {
        banks,
        selectedBank,
        isDropdownOpen,
        dropdownLanguages,
        handleBankClick,
        handleDropdownToggle,
    }

}