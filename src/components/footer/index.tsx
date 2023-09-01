import { useContext } from "react";
import MobileSearch from "./mobileSearch";
import { AppContext } from "../../context/HeaderContext";
import { Actions } from "./actions";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { toggleMobileSearchField, scrollPositionTop } = useContext(AppContext);

  const handleItemClick = (action: string) => {
    console.log(action);
    switch (action) {
      case Actions.HOME:
        navigate("/");
        scrollPositionTop();
        break;
      case Actions.CONTACT:
        console.log(Actions.CONTACT);
        break;
      case Actions.QUIZ:
        console.log(Actions.QUIZ);
        break;
      case Actions.SEARCH:
        toggleMobileSearchField();
        break;
      case Actions.VIDEO:
        console.log(Actions.VIDEO);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="xl:hidden visible flex items-center justify-center fixed bottom-0 left-0 h-24 w-full bg-[#FFFFFF] border-t-2 border-[#EAECF0] z-50">
        <div className="flex items-center justify-center space-x-6 font-Helvetica">
          {footerItems.map((item, index) => {
            return (
              <div
                onClick={() => handleItemClick(item.title)}
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-lg font-case font-Helvetica">{item.title}</p>
              </div>
            );
          })}
        </div>
        <MobileSearch />
      </div>
    </>
  );
};
export default Footer;
