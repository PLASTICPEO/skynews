import webLogo from "../../../../assets/images/NEWSHUB.svg";
import MobileLanguages from "../languages/mobileLanguages";

const Logo = () => {
  return (
    <div className="flex space-x-12 mb-5 xl:ml-0 ml-4">
      <img className="xl:w-96 w-60" src={webLogo} alt="logo" />
      <MobileLanguages />
    </div>
  );
};

export default Logo;
