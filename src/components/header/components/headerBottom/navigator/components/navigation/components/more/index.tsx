import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import DropDown from "../../../dropDown";

const More = () => {
  const { toggleDropDown, isOpenDropDown } = useContext(HeaderContext);

  return (
    <div className="relative">
      <div
        onClick={() => toggleDropDown()}
        className="flex  hover:text-[#1989F0] h-12 ml-7"
      >
        <span>მეტი</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      {isOpenDropDown ? <DropDown /> : null}
    </div>
  );
};

export default More;
