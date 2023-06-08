import Languages from "./components/languages";
import Social from "./components/social";
import Hero from "./components/hero/index";
import Navigator from "./components/navigator";

const Header = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] h-44 w-full">
        <Languages />
        <Social />
        <Hero />
        <Navigator />
      </div>
    </>
  );
};

export default Header;
