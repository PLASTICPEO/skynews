import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import DropDown from "../../../dropDown";
import ArrowIcon from "../../../../../../../../../assets/images/moreComponentArrow.svg";

const More = () => {
  const { toggleDropDown, isOpenDropDown } = useContext(HeaderContext);

  return (
    <div className="relative text-lg font-medium not-italic font-case font-Helvetica">
      <div
        onClick={() => toggleDropDown()}
        className=" hover:text-[#1989F0] h-14 ml-7"
      >
        <div className="flex items-center">
          <span>მეტი</span>
          <img src={ArrowIcon} alt="arrow" className="w-3 ml-1 mt-1" />
        </div>
      </div>
      {isOpenDropDown ? <DropDown /> : null}
    </div>
  );
};

export default More;
