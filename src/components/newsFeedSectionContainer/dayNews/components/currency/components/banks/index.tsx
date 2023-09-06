import { useEffect, useState } from "react";
import Unit from "../unit";

interface Language {
  id: string;
  label: string;
  DollarRate: number | string;
}

const banks = [
  {
    name: "ეროვნული ბანკი",
    dolarRate: 1.75,
    id: 1,
  },
  {
    name: "თიბისი ბანკი",
    dolarRate: 1.46,
    id: 2,
  },
];

const Banks = () => {
  const [selected, setSelected] = useState("აირჩიე ბანკი");
  const [isOpen, setIsOpen] = useState(false);
  const [dolarRate, setDolarRate] = useState<number | null>(null);
  const [selectedBank, setSelectedBank] = useState<any>(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleBankSelection = (bank: any) => {
    toggleDropDown();
    setSelected(bank.name);
    setDolarRate(bank.dolarRate);
    setSelectedBank(bank); // Store the selected bank separately
  };
  return (
    <div className="p-4 flex flex-col space-y-2">
      <div className="bg-[#8FCDE0] w-max rounded-lg">
        <div className="px-2.5 py-1.5 w-48">
          <div
            onClick={toggleDropDown}
            className="flex items-center space-x-10 justify-between"
          >
            <p className="text-xs">{selected}</p>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          {isOpen ? (
            <div>
              {banks.map((item: any) => {
                // Exclude the selected bank from rendering
                if (selectedBank && item.id === selectedBank.id) {
                  return null;
                }
                return (
                  <p
                    onClick={() => handleBankSelection(item)}
                    key={item.id}
                    className="text-sm"
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      {dolarRate ? (
        <div className=" w-max p-2 bg-[#FFFFFF] rounded-lg text-[#1B1B1B]">
          <div className="flex flex-col space-y-2 ">
            <p className="font-case font-[Helvetica] text-lg ">$ დოლარი</p>
            <p>GEL {dolarRate}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Banks;
