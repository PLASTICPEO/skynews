import { AppContext } from "../../../context/HeaderContext";
import { useContext } from "react";

import Logo from "./components/logo";

const HeaderMiddle = () => {
  const { scrollY } = useContext(AppContext);
  return (
    <div className={``}>
      <Logo />
    </div>
  );
};

export default HeaderMiddle;
