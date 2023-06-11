import DropDown from "./dropDown";
import Search from "./search";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import searchClose from "../../../../assets/images/searchFieldClose.svg";

const Navigator = () => {
  const {
    isOpenSearchField,
    isOpenDropDown,
    toggleDropDown,
    toggleMobileSearchField,
  } = useContext(HeaderContext);

  return (
    <div>
      <div className="flex justify-between font-[Helvetica] h-12 xl:w-auto w-96 overflow-x-scroll overflow-y-hidden xl:p-0 px-4">
        <div>
          <ul className="flex items-center justify-center space-x-6 font-[Helvica] text-[#475467] text-sm font-medium leading-4 cursor-pointer ">
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              მთავარი
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ყველა სიახლეს
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              პოლიტიკა
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              საზოგადოება
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              სამართალი
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              კონფლიქტები
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ეკონომიკა
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              უცხოეთი
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ანალიტიკა
            </li>
            <li
              onClick={() => toggleDropDown()}
              className="flex items-center pb-3 hover:text-[#1989F0]"
            >
              <span>მეტი</span>
              <span className="material-symbols-outlined">expand_more</span>
            </li>
          </ul>
        </div>
        <div>
          {!isOpenSearchField ? (
            <div
              onClick={() => toggleMobileSearchField()}
              className="flex justify-center h-7 font-[Helvetica] w-[150px] ml-14 border-l-2 border-[#EAECF0] cursor-pointer"
            >
              <span className="material-symbols-outlined  ml-7 text-[#475467]">
                search
              </span>
              <span className="text-[#475467]">ძიება</span>
            </div>
          ) : (
            <div
              onClick={() => toggleMobileSearchField()}
              className="flex justify-center h-7 w-[150px] font-[Helvetica] ml-14 border-l-2 border-[#EAECF0] cursor-pointer"
            >
              <img className="ml-7" src={searchClose} />
            </div>
          )}
        </div>
        {isOpenSearchField ? <Search /> : ""}
        {isOpenDropDown ? <DropDown /> : ""}
      </div>
    </div>
  );
};

export default Navigator;
