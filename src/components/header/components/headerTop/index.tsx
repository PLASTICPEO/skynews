import Languages from "./components/languages";
import Social from "./components/social";

const HeaderTop = () => {
  return (
    <div className="flex justify-between">
      <Languages />
      <Social />
    </div>
  );
};

export default HeaderTop;
