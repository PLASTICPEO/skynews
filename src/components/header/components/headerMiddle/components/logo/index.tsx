import { HeaderContext } from "../../../../context/HeaderContext";
import { useContext } from "react";
import heroLogo from "../../../../../../assets/images/NEWSHUBlogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  return (
    <Link to="/">
      <div
        className={`flex ${prevScrollPos > 50 ? "mb-0" : "mb-8"} xl:ml-0 ml-4`}
      >
        <img
          className={`${
            prevScrollPos > 50 ? "w-24" : "w-32"
          }  cursor-pointer m-auto`}
          src={heroLogo}
          alt="logo"
          onClick={scrollPositionTop}
        />
      </div>
    </Link>
  );
};

export default Logo;
