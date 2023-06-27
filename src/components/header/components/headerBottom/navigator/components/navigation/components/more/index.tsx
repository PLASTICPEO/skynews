import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import DropDown from "../../../dropDown";

const More = () => {
  const { toggleDropDown, isOpenDropDown } = useContext(HeaderContext);

  return (
    <div className="relative">
      <div
        onClick={() => toggleDropDown()}
        className=" hover:text-[#1989F0] h-14 ml-7"
      >
        <div className="flex items-center">
          <span className="text-lg font-medium not-italic font-case font-Helvetica">
            მეტი
          </span>
          <span className="mt-1 material-symbols-outlined">expand_more</span>
        </div>
      </div>
      {isOpenDropDown ? <DropDown /> : null}
    </div>
  );
};

export default More;
