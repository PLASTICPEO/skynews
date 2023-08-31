import { useContext } from "react";
import { useSearch } from "./hooks/useSearch";
import { HeaderContext } from "../../context/HeaderContext";

const SearchBar = () => {
  const { scrollY, toggleSearchField, isOpenSearchField } =
    useContext(HeaderContext);
  const { handleInputValue, searchResult } = useSearch();
  return (
    <div className={`xl:flex hidden items-center`}>
      {scrollY < 50 ? (
        <div className="border-l-2 pl-10 w-24">
          {isOpenSearchField ? (
            <div onClick={toggleSearchField} className="flex justify-start">
              <span className="material-symbols-outlined h-max p-1 rounded-full text-[#CB4A4A] bg-[#CB4A4A1A] ">
                close
              </span>
            </div>
          ) : (
            <div
              onClick={toggleSearchField}
              className="flex items-center justify-center"
            >
              <span className="material-symbols-outlined h-max p-1 mr-2 rounded-full bg-[#F2F4F7]">
                search
              </span>
              <p>ძიება</p>
            </div>
          )}
        </div>
      ) : null}
      {isOpenSearchField ? (
        <div className="absolute -bottom-14 left-0 bg-[#101828] w-full h-15 px-20 py-2">
          <div className="flex items-center justify-between">
            <input
              onChange={(e) => handleInputValue(e)}
              type="text"
              className="bg-transparent border-none outline-none w-full h-5  placeholder:text-[#FFFFFF4D] text-[#FFFFFF] placeholder:text-xl font-light font-[Helvetica] font-case text-lg"
              placeholder="შეიყვანეთ საძიებო სიტყვა..."
            />
            <button className="px-6 py-2.5 bg-[#1989F0] rounded-full text-[#FFFFFF] hover:bg-opacity-90">
              მოძიება
            </button>
          </div>

          {searchResult ? (
            <div className="absolute left-0 bg-[#101828] space-y-4 h-max w-full py-4 px-20 mt-2 w-full border-t-[1px] border-[#FFFFFF1A]">
              {searchResult.map((item: any, index: number) => (
                <div key={index} className="flex space-x-4">
                  <img src={item.img} alt="" />
                  <p className="py-4 text-[#FFFFFF] flex items-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
