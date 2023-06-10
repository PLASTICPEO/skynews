import Languages from "../../components/header/components/languages";
import Social from "../../components/header/components/social";
import Hero from "../../components/header/components/hero";
import Navigator from "../../components/header/components/navigator";

const Header = () => {
  return (
    <div className="fixed flex flex-col justify-between  top-0 bg-[#FFFFFF] h-44 w-full z-40 px-20 ">
      <div className="flex justify-between items-center pt-5">
        <Languages />
        <Social />
      </div>
      <div className="flex justify-center">
        <Hero />
      </div>
      <div>
        <Navigator />
      </div>
    </div>
  );
};

export default Header;
