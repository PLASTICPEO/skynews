import Languages from "../../components/header/components/languages";
import Social from "../../components/header/components/social";
import Hero from "../../components/header/components/hero";
import Navigator from "../../components/header/components/navigator";

const Header = () => {
  return (
    <div className="sticky top-0 bg-[#FFFFFF] h-44 w-full z-40">
      <Languages />
      <Social />
      <Hero />
      <Navigator />
    </div>
  );
};

export default Header;
