import { useContext } from "react";
import { AppContext } from "../../../context/HeaderContext";

import Item from "../../NewsFeedsContainer/sideNewsFeed/item";
import { useMobileSearch } from "./hooks/useMobileSearch";

const MobileSearch = () => {
  const { isOpenMobileSearch } = useContext(AppContext);
  const { handleInputValue, searchResult, searchValue, cancelSearch } =
    useMobileSearch();

  return (
    <>
      {isOpenMobileSearch ? (
        <div className="fixed top-0 left-0 w-full h-28 bg-[#FFFFFF] drop-shadow-lg z-50">
          <div className="flex items-center justify-between  w-full h-full p-4">
            <div className="flex items-center justify-center space-x-4">
              <span className="material-symbols-outlined w-4">search</span>
              <input
                onChange={(e) => handleInputValue(e)}
                type="text"
                className="border-none outline-none bg-transparent caret-[#1989F0] h-5 text-[#101828] font-[Helvetica]"
                placeholder="საძიებო სიტყვა..."
                value={searchValue}
              />
            </div>
            <button
              onClick={() => cancelSearch()}
              className="text-[#1989F0] text-sm font-[Helvetica]"
            >
              გაუქმება
            </button>
          </div>

          {searchResult ? (
            <>
              {searchResult.map(
                (
                  item: {
                    img: string;
                    category: string;
                    title: string;
                    time: string;
                  },
                  index: number
                ) => {
                  return (
                    <div key={index} className="bg-[#FFFFFF] px-2 w-full">
                      <Item
                        category={item.category}
                        photo={item.img}
                        text={item.title}
                        time={item.time}
                        border
                      />
                    </div>
                  );
                }
              )}
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default MobileSearch;
