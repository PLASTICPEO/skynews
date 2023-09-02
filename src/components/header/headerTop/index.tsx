import { useContext } from "react";
import Languages from "./components/languages";
import Social from "./components/social";
import { AppContext } from "../../../context/HeaderContext";

const HeaderTop = () => {
  const { scrollY } = useContext(AppContext);

  return (
    <>
      {scrollY < 50 ? (
        <div className="flex justify-between mt-4">
          <Languages />
          <Social />
        </div>
      ) : null}
    </>
  );
};

export default HeaderTop;
