import { useContext, useState } from "react";
import { AppContext } from "../../../context/HeaderContext";

import judge from "../../../assets/search/Rectangle 4.svg";
import frussia from "../../../assets/search/frussia.svg";
import usa from "../../../assets/search/აშშ.svg";
import orban from "../../../assets/search/ორბანი.svg";
import Item from "../../NewsFeedsContainer/sideNewsFeed/item";

const dataBase = [
  {
    img: judge,
    title:
      'შეიძინა პოლიტიკური შინაარსიც" - მოსამართლე აშშ-ში სასწავლო ვიზიტზე უარს ამბობს',
    category: "პოლიტიკა",
    time: "12",
  },
  {
    img: frussia,
    title:
      'ლავროვის თქმით, ითვალისწინებენ დასავლეთის მცდელობებს, "მეორე ფრონტი" გახსნას',
    category: "უცხოეთი",
    time: "24",
  },
  {
    img: usa,
    title:
      "აშშ-ის საელჩო: სიამაყეს, რომლითაც ქართული ენის სიყვარულს დაატარებთ, ვერავინ წაგართმევთ",
    category: "კონფლიქტები",
    time: "35",
  },
  {
    img: orban,
    title:
      "ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება",
    category: "პოლიტიკა",
    time: "3",
  },
];

const MobileSearch = () => {
  const { isOpenMobileSearch, toggleMobileSearchField } =
    useContext(AppContext);

  const [searchResult, setSearchResult] = useState<any>(); // Initialize with an empty string
  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const result = dataBase.filter((items) => items.title.includes(inputValue));
    setSearchValue(inputValue);
    console.log(searchResult);

    if (inputValue.length > 0) {
      setSearchResult(result);
    } else {
      setSearchResult("");
    }
  };

  const cancelSearch = () => {
    setSearchValue("");
    setSearchResult("");
    toggleMobileSearchField();
  };
  return (
    <>
      {isOpenMobileSearch ? (
        <div className="fixed top-0 left-0 w-full h-28 bg-[#FFFFFF] drop-shadow-lg">
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
            <div className="bg-[#FFFFFF] py-4 px-2 w-full">
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
                    <div key={index}>
                      <Item
                        category={item.category}
                        photo={item.img}
                        text={item.title}
                        time={item.time}
                      />
                    </div>
                  );
                }
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default MobileSearch;
