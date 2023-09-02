import { useContext, useState } from "react";
import { AppContext } from "../../../../context/HeaderContext";

import judge from "../../../../assets/newsFeedsPhotoTest/Rectangle 4.png";
import frussia from "../../../../assets/search/frussia.svg";
import usa from "../../../../assets/search/აშშ.svg";
import orban from "../../../../assets/search/ორბანი.svg";

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

export const useMobileSearch = () => {
  const { toggleMobileSearchField } = useContext(AppContext);
  const [searchResult, setSearchResult] = useState<any>();
  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const result = dataBase.filter((items) => items.title.includes(inputValue));

    setSearchValue(inputValue);
    setSearchResult(result);

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
  return {
    searchValue,
    searchResult,
    handleInputValue,
    cancelSearch,
  };
};
