import webLogo from "../../../../assets/images/NEWSHUB.svg";

const Hero = () => {
  return (
    <div className="absolute xl:left-1/2 left-5 xl:-translate-x-1/2 xl:top-12  top-20">
      <img className="xl:w-96 w-60" src={webLogo} alt="logo" />
    </div>
  );
};

export default Hero;
