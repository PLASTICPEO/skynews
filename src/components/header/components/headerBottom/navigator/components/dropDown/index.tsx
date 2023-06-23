import { useContext } from "react";
import { HeaderContext } from "../../../../../context/HeaderContext";
import { useDropDown } from "./hooks/useDropDown";

const DropDown = () => {
  const { prevScrollPos } = useContext(HeaderContext);
  const { items, handleLangClick } = useDropDown();

  const dropDownPosition =
    prevScrollPos > 50 ? "top-10 right-0" : "top-12 left-2/3 -translate-x-1/2";
  return (
    <div
      className={`absolute  ${dropDownPosition} xl:w-44 w-full h-max p-2.5 bg-[#FFFFFF] transition-opacity rounded-md shadow z-50`}
    >
      {items && (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleLangClick(item.id)}
              className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
