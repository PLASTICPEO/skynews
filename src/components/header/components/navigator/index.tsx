import DropDown from "./components/dropDown";
import Search from "./components/search";
import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import searchClose from "../../../../assets/images/searchFieldClose.svg";

const Navigator = () => {
  const {
    isScrolled,
    isOpenSearchField,
    isOpenDropDown,
    toggleDropDown,
    toggleSearchField,
    scrollPositionTop,
  } = useContext(HeaderContext);

  return (
    <div>
      <div className="flex justify-between font-[Helvetica] h-12 xl:w-auto overflow-x-scroll overflow-y-hidden xl:p-0 px-4">
        <div>
          <ul className="flex items-center justify-center space-x-8 font-[Helvica] text-[#475467] text-sm font-medium leading-4 cursor-pointer ">
            <li
              onClick={scrollPositionTop}
              className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]"
            >
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
            <li onClick={() => toggleDropDown()}>
              <div className="flex items-center pb-3  hover:text-[#1989F0]">
                <span>მეტი</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div
                className={`absolute ${
                  isScrolled ? "top-26" : "top-36"
                }   xl:right-64 right-0`}
              >
                {isOpenDropDown ? <DropDown /> : ""}
              </div>
            </li>
          </ul>
        </div>
        {!isScrolled ? (
          <div>
            {!isOpenSearchField ? (
              <div
                onClick={() => toggleSearchField()}
                className="flex justify-end h-7 font-[Helvetica] w-36 border-l-2 border-[#EAECF0] cursor-pointer"
              >
                <span className="material-symbols-outlined   text-[#475467]">
                  search
                </span>
                <span className="text-[#475467]">ძიება</span>
              </div>
            ) : (
              <div
                onClick={() => toggleSearchField()}
                className="flex justify-end h-7 w-36 font-[Helvetica]  border-l-2 border-[#EAECF0] cursor-pointer"
              >
                <img className="ml-7" src={searchClose} />
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {isOpenSearchField ? <Search /> : ""}
      </div>
    </div>
  );
};

export default Navigator;
