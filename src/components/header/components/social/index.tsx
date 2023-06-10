import fecabookIcon from "../../../../assets/images/facebookIcon.svg";
import instagramIcon from "../../../../assets/images/instagramICon.svg";

const Social = () => {
  return (
    <>
      <div className="absolute xl:top-4 xl:right-28 xl:visible invisible  flex  font-[Helvetica] font-medium text-xs text-[#475467]">
        <ul className="flex space-x-5">
          <li className="hover:text-[#1989F0]">ქვიზები</li>
          <li className="hover:text-[#1989F0]">ფოტო გალერეა</li>
        </ul>
        <div className="ml-4 flex space-x-3">
          <img
            className="hover:text-[#1989F0]"
            src={fecabookIcon}
            alt="facebook"
          />
          <img src={instagramIcon} alt="instagram" />
        </div>
      </div>
    </>
  );
};

export default Social;
