import { NavigationPropsTypes } from "./navigation.types";
import { HeaderContext } from "../../../../../context/HeaderContext";
import { useContext } from "react";

import DropDown from "../dropDown";

import { Link } from "react-router-dom";
import More from "./components/more";
import SearchButton from "./components/searchButton";

const Navigation: React.FC<NavigationPropsTypes> = ({ items }) => {
  const { prevScrollPos, isOpenDropDown, scrollPositionTop } =
    useContext(HeaderContext);

  const containerClass =
    "flex items-center justify-between w-full font-[Helvica] text-[#475467] text-sm font-medium cursor-pointer";
  const listClass = `flex items-center justify-center  ${
    prevScrollPos > 50 ? "xl:space-x-7" : "xl:space-x-10"
  } space-x-4 xl:w-full w-[1000px]`;
  const listItemClass =
    "h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]";
  const dropDownPosition =
    prevScrollPos > 50 ? "top-16 xl:right-14" : "top-44 xl:right-48";

  return (
    <div className={containerClass}>
      <div className="flex">
        <ul className={listClass}>
          {items.map((item, index) => {
            return (
              <Link key={index} to={item.href}>
                <li onClick={scrollPositionTop} className={listItemClass}>
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <More />
      </div>
      {prevScrollPos < 50 ? <SearchButton /> : null}
      <div className={`absolute ${dropDownPosition}`}>
        {isOpenDropDown ? <DropDown /> : null}
      </div>
    </div>
  );
};

export default Navigation;
