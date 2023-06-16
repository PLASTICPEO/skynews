import { HeaderContext } from "../../../../context/HeaderContext";
import { useContext } from "react";
import MobileSearch from "./mobileSearch";
import { useMobileSearch } from "./mobileSearch/hooks/useMobileSearch";

const Search = () => {
  const { prevScrollPos } = useContext(HeaderContext);
  const { isMobile } = useMobileSearch();
  return (
    <>
      {!isMobile ? (
        <div
          className={`flex items-center absolute ${
            prevScrollPos > 150 ? "top-28" : "top-44"
          } left-0 w-full  px-28 h-14 bg-[#101828] xl:visible invisible z-40`}
        >
          <input
            className=" w-full outline-none p-2.5 appearance-none bg-transparent w-52 h-8 font-[Helvetica] text-sm text-[#FFFFFF]  placeholder:text-[#475467] appearance-none caret-[#1989F0] "
            type="search"
            placeholder="შეიყვანეთ საძიებო სიტყვა"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-44 w-28  bg-[#1989F0] text-[#FFFFFF] rounded-3xl">
            მოძებნა
          </button>
        </div>
      ) : (
        <MobileSearch />
      )}
    </>
  );
};

export default Search;
