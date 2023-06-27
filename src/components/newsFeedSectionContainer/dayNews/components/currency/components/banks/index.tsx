import { useBank } from "./hooks/useBank";
import ArrowIcon from "../../../../../../../assets/images/moreComponentArrow.svg";

const Banks = () => {
  const {
    banks,
    selectedBank,
    isDropdownOpen,
    dropdownLanguages,
    handleBankClick,
    handleDropdownToggle,
  } = useBank();

  return (
    <div className="z-40 w-48 cursor-pointer m-4">
      <div
        className="flex items-center text-[#101828] font-medium order-1 not-italic font-case font-Helvetica bg-[#9FB4BC] rounded-xl p-2 justify-between"
        onClick={handleDropdownToggle}
      >
        {selectedBank
          ? banks.find((bank) => bank.id === selectedBank)?.label ||
            banks[0].label
          : "აირჩიე ბანკი"}
        <img src={ArrowIcon} alt="arrow" className="w-3 ml-1 mt-1" />
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-48 text-sm border rounded p-2 bg-[#9FB4BC]">
          {dropdownLanguages.map((bank) => (
            <li
              key={bank.id}
              onClick={() => handleBankClick(bank.id)}
              className="text-[#101828] hover:text-[#FFFFFF] "
            >
              {bank.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Banks;
