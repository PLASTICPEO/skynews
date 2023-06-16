import { HeaderContext } from "../../context/HeaderContext";
import { useContext } from "react";
import webLogo from "../../../../assets/images/NEWSHUB.svg";
import MobileLanguages from "../languages/mobileLanguages";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <div
      className={`flex items-center ${
        prevScrollPos > 150 ? "mb-2" : "mb-12"
      } xl:ml-0 ml-4 mt-2`}
    >
      <img
        className={`${
          prevScrollPos > 150 ? "xl:w-60" : "xl:w-96"
        } w-10 cursor-pointer`}
        src={webLogo}
        alt="logo"
        onClick={scrollPositionTop}
      />
      <MobileLanguages />
    </div>
  );
};

export default Logo;
