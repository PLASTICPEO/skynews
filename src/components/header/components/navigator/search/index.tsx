import MobileSearch from "./mobileSearch";
import { useMobileSearch } from "./mobileSearch/hooks/useMobileSearch";

const Search = () => {
  const { isMobile } = useMobileSearch();
  return (
    <>
      {!isMobile ? (
        <div className="flex items-center absolute top-44 left-0 w-full  px-28 h-[58px] bg-[#101828] xl:visible invisible z-40">
          <input
            className=" w-full outline-none p-2.5 appearance-none bg-transparent w-52 h-5 font-[Helvetica] text-sm text-[#FFFFFF]  placeholder:text-[#475467] appearance-none caret-[#1989F0] "
            type="search"
            placeholder="შეიყვანეთ საძიებო სიტყვა"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-44 w-28 h-10 bg-[#1989F0] text-[#FFFFFF] rounded-3xl">
            მოძიება
          </button>
        </div>
      ) : (
        <MobileSearch />
      )}
    </>
  );
};

export default Search;
