import { HeaderContext } from "../../context/HeaderContext";
import { useContext } from "react";
import webLogo from "../../../../assets/images/NEWSHUB.svg";
import MobileLanguages from "../languages/mobileLanguages";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <div className={`flex justify-center  mb-5 xl:ml-0 ml-4`}>
      <img
        className={`${
          prevScrollPos > 150 ? "xl:w-36" : "xl:w-96"
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
