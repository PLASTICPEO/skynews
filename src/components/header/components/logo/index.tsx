import { HeaderContext } from "../../context/HeaderContext";
import { useContext } from "react";
import webLogo from "../../../../assets/images/NEWSHUB.svg";
import MobileLanguages from "../languages/mobileLanguages";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <div
      className={`flex xl:items-center xl:justify-center xl:mt-0 mt-10 ${
        prevScrollPos > 50 ? "mb-2" : "mb-12"
      } xl:ml-0 ml-4 xl:mt-2`}
    >
      <img
        className={`${
          prevScrollPos > 50 ? "xl:w-60" : "xl:w-96"
        } w-60 cursor-pointer`}
        src={webLogo}
        alt="logo"
        onClick={scrollPositionTop}
      />
      <div>
        <MobileLanguages />
      </div>
    </div>
  );
};

export default Logo;
