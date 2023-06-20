import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

const More = () => {
  const { toggleDropDown } = useContext(HeaderContext);

  return (
    <div
      onClick={() => toggleDropDown()}
      className="flex pb-2 hover:text-[#1989F0] ml-8"
    >
      <span>მეტი</span>
      <span className="material-symbols-outlined">expand_more</span>
    </div>
  );
};

export default More;
