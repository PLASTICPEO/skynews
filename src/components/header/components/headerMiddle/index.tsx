import { HeaderContext } from "../../context/HeaderContext";
import { useContext } from "react";

import Logo from "./components/logo";

const HeaderMiddle = () => {
  const { prevScrollPos } = useContext(HeaderContext);
  return (
    <div className={`${prevScrollPos > 50 ? "mt-0" : "mt-4"}`}>
      <Logo />
    </div>
  );
};

export default HeaderMiddle;
