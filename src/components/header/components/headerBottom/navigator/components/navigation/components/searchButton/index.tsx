import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import searchIcon from "../../../../../../../../../assets/images/searchIcon.svg";
import searchClose from "../../../../../../../../../assets/images/searchFieldClose.svg";

const SearchButton = () => {
  const { toggleSearchField, isOpenSearchField } = useContext(HeaderContext);

  return (
    <div
      onClick={() => toggleSearchField()}
      className="flex justify-end  h-8 font-[Helvetica] w-28 border-l-2 border-[#EAECF0] cursor-pointer"
    >
      <img
        src={!isOpenSearchField ? searchIcon : searchClose}
        className="text-[#475467]   rounded-full w-7 h-7"
      />

      {!isOpenSearchField ? (
        <span className="text-[#475467] ml-2">ძიება</span>
      ) : null}
    </div>
  );
};

export default SearchButton;
