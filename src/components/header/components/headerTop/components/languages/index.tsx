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
      <ul className=" xl:flex hidden  space-x-2 font-[Helvetica] font-medium text-xs text-[#475467] cursor-pointer">
        {lang.map((language) => (
          <Link key={language.id} to={language.href}>
            <li
              onClick={() => handleLangClick(language.id)}
              className={`${
                selectedLang === language.id ? "text-[#1989F0]" : ""
              } flex items-center justify-end `}
            >
              {language.label !== "ქარ" && (
                <div className="h-1 w-1 rounded-full bg-[#EAECF0] mr-2"></div>
              )}
              {language.label}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Languages;
