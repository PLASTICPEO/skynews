import { HeaderContext } from "../context/HeaderContext";
import { useContext } from "react";

import Logo from "./components/logo";

const HeaderMiddle = () => {
  const { scrollY } = useContext(HeaderContext);
  return (
    <div className={`${scrollY > 50 ? "mt-0" : "mt-4"}`}>
      <Logo />
    </div>
  );
};

export default HeaderMiddle;
