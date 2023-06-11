import React, { useState } from "react";

interface Language {
  id: string;
  label: string;
}

const MobileLanguages: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const lang: Language[] = [
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

  const handleLangClick = (id: string) => {
    setSelectedLang(id);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownLanguages = lang.filter(
    (language) => language.id !== selectedLang
  );

  return (
    <div className="xl:invisible visible bg-[#FFFFFF] z-40">
      <div
        className="flex items-center text-[#1989F0] text-sm bg-[#FFFFFF]"
        onClick={handleDropdownToggle}
      >
        {selectedLang
          ? lang.find((language) => language.id === selectedLang)?.label ||
            lang[0].label
          : lang[0].label}
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      {isDropdownOpen && (
        <ul className="text-sm border rounded bg-[#FFFFFF]">
          {dropdownLanguages.map((language) => (
            <li
              key={language.id}
              onClick={() => handleLangClick(language.id)}
              className="bg-[#FFFFFF]"
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileLanguages;
