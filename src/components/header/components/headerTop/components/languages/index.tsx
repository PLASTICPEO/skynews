import { useState } from "react";
import { Link } from "react-router-dom";
const Languages = () => {
  const [selectedLang, setSelectedLang] = useState(null);

  const lang = [
    {
      id: "1",
      label: "ქარ",
      href: "/",
    },
    {
      id: "2",
      label: "ENG",
      href: "/",
    },
    {
      id: "3",
      label: "RUS",
      href: "/",
    },
  ];

  const handleLangClick = (id: any) => {
    setSelectedLang(id);
  };

  return (
    <>
      <ul className=" xl:flex hidden  space-x-5 font-[Helvetica] font-medium text-xs text-[#475467] cursor-pointer">
        {lang.map((language) => (
          <Link key={language.id} to={language.href}>
            <li
              onClick={() => handleLangClick(language.id)}
              className={selectedLang === language.id ? "text-[#1989F0]" : ""}
            >
              {language.label}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Languages;
