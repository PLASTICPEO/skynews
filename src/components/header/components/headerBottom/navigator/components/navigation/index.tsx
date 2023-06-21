import { NavigationPropsTypes } from "./navigation.types";
import { HeaderContext } from "../../../../../context/HeaderContext";
import { useContext } from "react";

import DropDown from "../dropDown";

import More from "./components/more";
import SearchButton from "./components/searchButton";
import Nav from "./components/nav";

const Navigation: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos } = useContext(HeaderContext);

  return (
    <div className="flex justify-between w-full font-[Helvica] text-[#475467] text-sm font-medium cursor-pointer">
      <div className="flex items-center">
        <Nav navItems={navItems} />
        <More />
      </div>
      {prevScrollPos < 50 ? <SearchButton /> : null}
    </div>
  );
};

export default Navigation;
