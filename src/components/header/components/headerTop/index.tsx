import Languages from "./components/languages";
import Social from "./components/social";

const HeaderTop = () => {
  return (
    <div className="flex justify-between mt-4">
      <Languages />
      <Social />
    </div>
  );
};

export default HeaderTop;
