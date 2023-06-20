import Search from "./components/search";
import Navigation from "./components/navigation";
import { NavigatorPropsTypes } from "./navigator.types";

const Navigator: React.FC<NavigatorPropsTypes> = ({ navigation }) => {
  return (
    <div className="flex font-primary h-12 overflow-x-scroll overflow-y-hidden xl:p-0 px-4">
      <Navigation items={navigation} />
      <Search />
    </div>
  );
};

export default Navigator;

// const {
//   prevScrollPos,
//   isOpenSearchField,
//   isOpenDropDown,
//   toggleDropDown,
//   toggleSearchField,
//   scrollPositionTop,
// } = useContext(HeaderContext);

{
  /* <>
      <div className="flex xl:justify-between items-end font-[Helvetica] h-12 overflow-x-scroll overflow-y-hidden xl:p-0 px-4">
        <div>
          <ul
            className={`flex ${
              prevScrollPos > 50 ? "xl:space-x-7" : "xl:space-x-9"
            } space-x-4 xl:w-full w-[1000px] font-[Helvica] text-[#475467] text-sm
            font-medium  cursor-pointer`}
          >
            <Link to="/">
              <li
                onClick={scrollPositionTop}
                className="h-8 hover:border-b-2 hover:border-blue-400  hover:border-[#1989F0] hover:text-[#1989F0]"
              >
                მთავარი
              </li>
            </Link>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ყველა სიახლეს
            </li>
            <Link to="/politic">
              <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
                პოლიტიკა
              </li>
            </Link>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              საზოგადოება
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              სამართალი
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              კონფლიქტები
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ეკონომიკა
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              უცხოეთი
            </li>
            <li className="h-8 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]">
              ანალიტიკა
            </li>
            <li onClick={() => toggleDropDown()}>
              <div className="flex pb-2 hover:text-[#1989F0] relative">
                <span>მეტი</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
              <div
                className={`absolute ${
                  prevScrollPos > 50
                    ? "top-16 xl:right-14"
                    : "top-44 xl:right-48"
                } `}
              >
                {isOpenDropDown ? <DropDown /> : null}
              </div>
            </li>
          </ul>
        </div>
        {prevScrollPos < 50 ? (
          <div>
            {!isOpenSearchField ? (
              <div
                onClick={() => toggleSearchField()}
                className="flex justify-end h-8 font-[Helvetica] w-28 border-l-2 border-[#EAECF0] cursor-pointer"
              >
                <img
                  src={searchIcon}
                  className="text-[#475467] rounded-full w-7 h-7"
                />

                <span className="text-[#475467] ml-2">ძიება</span>
              </div>
            ) : (
              <div
                onClick={() => toggleSearchField()}
                className="flex justify-end h-7 w-36 font-[Helvetica]  border-l-2 border-[#EAECF0] cursor-pointer"
              >
                <img className="ml-7" src={searchClose} />
              </div>
            )}
          </div>
        ) : null}
      </div>
      {isOpenSearchField ? <Search /> : null}
    </> */
}
