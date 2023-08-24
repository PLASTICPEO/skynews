import { useBank } from "./hooks/useBank";

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
    <div
      className="flex items-center  z-40 cursor-pointer m-4 relative"
      onClick={handleDropdownToggle}
    >
      <div className="flex w-40 text-lg justify-between text-[#101828] bg-[#9FB4BC] rounded-xl p-2 ">
        <div className="font-medium order-1 not-italic font-case font-Helvetica">
          {selectedBank
            ? banks.find((bank) => bank.id === selectedBank)?.label ||
              banks[0].label
            : "აირჩიე ბანკი"}
        </div>
        <div>
          <span className="mt-1 material-symbols-outlined">expand_more</span>
        </div>
      </div>

      {isDropdownOpen && (
        <ul className="absolute top-12 w-48 text-sm border rounded p-2 bg-[#9FB4BC]">
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
