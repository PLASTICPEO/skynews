import Languages from "./components/languages";
import Social from "./components/social";
import Logo from "./components/logo";
import Navigator from "./components/navigator";

const Header = () => {
  return (
    <div className="fixed top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] h-44 w-full z-40 xl:px-28">
      <div className="flex justify-between items-center pt-5">
        <Languages />
        <Social />
      </div>
      <div className="xl:flex xl:justify-center">
        <Logo />
      </div>
      <div className="xl:mt-0 mt-14">
        <Navigator />
      </div>
    </div>
  );
};

export default Header;