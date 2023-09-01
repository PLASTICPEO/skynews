import { AppContext } from "../../../../../context/HeaderContext";
import { useContext } from "react";
import heroLogo from "../../../../../assets/images/NEWSHUB.png";
import { Link } from "react-router-dom";

const Logo = () => {
  const { scrollY, scrollPositionTop } = useContext(AppContext);

  return (
    <Link to="/">
      <div className={`flex ${scrollY > 50 ? "mb-0" : "mb-11"} xl:ml-0 ml-4`}>
        <img
          className={` ${
            scrollY > 50 ? "xl:w-36" : "xl:w-48"
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
