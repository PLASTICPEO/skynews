import { HeaderContext } from "../../../../context/HeaderContext";
import { useContext } from "react";
import heroLogo from "../../../../../../assets/images/NEWSHUB.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <Link to="/">
      <div
        className={`flex xl:mt-2 mt-10 ${
          prevScrollPos > 50 ? "mb-0" : "mb-11"
        } xl:ml-0 ml-4`}
      >
        <img
          className={`${
            prevScrollPos > 50 ? "xl:w-36" : "xl:w-96"
          } w-60 cursor-pointer m-auto`}
          src={heroLogo}
          alt="logo"
          onClick={scrollPositionTop}
        />
      </div>
    </Link>
  );
};

export default Logo;
