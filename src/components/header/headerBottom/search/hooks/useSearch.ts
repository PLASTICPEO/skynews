import { useState } from "react";
import judge from "../../../../../assets/search/Rectangle 4.svg";
import frussia from "../../../../../assets/search/frussia.svg";
import usa from "../../../../../assets/search/აშშ.svg";
import orban from "../../../../../assets/search/ორბანი.svg";

const dataBase = [
  {
    img: judge,
    title:
      'შეიძინა პოლიტიკური შინაარსიც" - მოსამართლე აშშ-ში სასწავლო ვიზიტზე უარს ამბობს',
  },
  {
    img: frussia,
    title:
      'ლავროვის თქმით, ითვალისწინებენ დასავლეთის მცდელობებს, "მეორე ფრონტი" გახსნას',
  },
  {
    img: usa,
    title:
      "აშშ-ის საელჩო: სიამაყეს, რომლითაც ქართული ენის სიყვარულს დაატარებთ, ვერავინ წაგართმევთ",
  },
  {
    img: orban,
    title:
      "ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება",
  },
];

export const useSearch = () => {
  //   const [data, setData] = useState(dataBase); // Initialize with full dataBase array
  const [searchResult, setSearchResult] = useState<any>(); // Initialize with an empty string

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const result = dataBase.filter((items) => items.title.includes(inputValue));

    if (inputValue.length > 0) {
      setSearchResult(result);
    } else {
      setSearchResult("");
    }
  };

  return {
    searchResult,
    handleInputValue,
  };
};
