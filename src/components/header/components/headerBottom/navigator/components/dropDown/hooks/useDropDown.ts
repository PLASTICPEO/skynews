import { useState } from "react";
import { DropDownItemsTypes } from "../dropDown.types";

export const useDropDown = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const items: DropDownItemsTypes[] = [
      {
        id: "1",
        label: "ამინდი",
      },
      {
        id: "2",
        label: "სამხედრო",
      },
      {
        id: "3",
        label: "რეგიონი",
      },
      {
        id: "4",
        label: "ინტერვიუ",
      },
      {
        id: "5",
        label: "ბიზნესი",
      },
      {
        id: "6",
        label: "არჩევნები",
      },
    ];
  
    const handleLangClick = (id: string) => {
      setSelected(id);
    };

    return {
        selected,
        items,
        handleLangClick,
    }
}