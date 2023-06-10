import MobileLanguages from "./mobileLanguages";
import { useState } from "react";
const Languages = () => {
  const [selectedLang, setSelectedLang] = useState(null);

  const lang = [
    {
      id: "1",
      label: "ქარ",
    },
    {
      id: "2",
      label: "ENG",
    },
    {
      id: "3",
      label: "RUS",
    },
  ];

  const handleLangClick = (id: any) => {
    setSelectedLang(id);
  };

  return (
    <>
      <ul className="absolute xl:top-4 xl:visible invisible xl:left-28 flex space-x-5 font-[Helvetica] font-medium text-xs text-[#475467] cursor-pointer">
        {lang.map((language) => (
          <li
            key={language.id}
            onClick={() => handleLangClick(language.id)}
            className={selectedLang === language.id ? "text-[#1989F0]" : ""}
          >
            {language.label}
          </li>
        ))}
      </ul>
      <MobileLanguages />
    </>
  );
};

export default Languages;
