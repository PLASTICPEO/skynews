import { useContext } from "react";
import MobileSearch from "./mobileSearch";
import { AppContext } from "../../context/HeaderContext";

import { useFooter } from "./hooks/useFooter";

const footerItems = [
  {
    title: "მთავარი",
    icon: "home",
  },
  {
    title: "ძიება",
    icon: "search",
  },
  {
    title: "ვიდეო",
    icon: "play_arrow",
  },
  {
    title: "ქვიზი",
    icon: "widgets",
  },
  {
    title: "კონტაქტი",
    icon: "email",
  },
];

const Footer = () => {
  const { isOpenMobileSearch } = useContext(AppContext);
  const { handleItemClick } = useFooter();

  return (
    <>
      {!isOpenMobileSearch ? (
        <div className="fixed xl:hidden bottom-0 left-0 flex items-center justify-center h-24 w-full bg-[#FFFFFF] border-t-2 border-[#EAECF0] z-30">
          <div className="flex items-center justify-center space-x-6 font-Helvetica">
            {footerItems.map((item, index) => {
              return (
                <div
                  onClick={() => handleItemClick(item.title)}
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <p className="text-lg font-case font-Helvetica">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <MobileSearch />
    </>
  );
};
export default Footer;
