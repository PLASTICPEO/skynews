import { NavigationPropsTypes } from "./navigation.types";
import { HeaderContext } from "../../../../../context/HeaderContext";
import { useContext } from "react";

import DropDown from "../dropDown";

import More from "./components/more";
import SearchButton from "./components/searchButton";
import Nav from "./components/nav";

const Navigation: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos, isOpenDropDown } = useContext(HeaderContext);

  const dropDownPosition =
    prevScrollPos > 50 ? "top-16 xl:right-14" : "top-44 xl:right-48";

  return (
    <div className="flex items-center justify-between w-full font-[Helvica] text-[#475467] text-sm font-medium cursor-pointer">
      <div className="flex">
        <Nav navItems={navItems} />
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
