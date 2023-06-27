import { NavigationPropsTypes } from "./navigation.types";
import { HeaderContext } from "../../../../../context/HeaderContext";
import { useContext } from "react";

import More from "./components/more";
import SearchButton from "./components/searchButton";
import Nav from "./components/nav";

const Navigation: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos } = useContext(HeaderContext);

  return (
    <div className="flex justify-between w-full h-12 text-[#475467] cursor-pointer">
      <div className="flex">
        <Nav navItems={navItems} />
        <More />
      </div>
      {prevScrollPos < 50 ? <SearchButton /> : null}
    </div>
  );
};

export default Navigation;
