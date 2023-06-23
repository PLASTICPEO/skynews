import { HeaderContext } from "../../../../context/HeaderContext";
import { useContext } from "react";
import webLogo from "../../../../../../assets/images/NEWSHUB.svg";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <div
      className={`flex xl:mt-0 mt-10 ${
        prevScrollPos > 50 ? "mb-0" : "mb-11"
      } xl:ml-0 ml-4`}
    >
      <img
        className={`${
          prevScrollPos > 50 ? "xl:w-36" : "xl:w-96"
        } w-60 cursor-pointer m-auto`}
        src={webLogo}
        alt="logo"
        onClick={scrollPositionTop}
      />
    </div>
  );
};

export default Logo;
