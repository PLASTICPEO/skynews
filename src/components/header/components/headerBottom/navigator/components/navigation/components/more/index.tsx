import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import DropDown from "../../../dropDown";

const More = () => {
  const { toggleDropDown, prevScrollPos, isOpenDropDown } =
    useContext(HeaderContext);

  const dropDownPosition = prevScrollPos > 50 ? "top-16" : "top-44";

  return (
    <div onClick={() => toggleDropDown()}>
      <div className="flex h-10">
        <div className="flex hover:text-[#1989F0] ml-8">
          <span>მეტი</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <div className={`absolute ${dropDownPosition}`}>
          {isOpenDropDown ? <DropDown /> : null}
        </div>
      </div>
    </div>
  );
};

export default More;
