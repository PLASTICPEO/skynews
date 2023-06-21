import fecabookIcon from "../../../../../../assets/images/facebookIcon.svg";
import instagramIcon from "../../../../../../assets/images/instagramICon.svg";

const Social = () => {
  return (
    <>
      <div className="xl:flex hidden font-[Helvetica] font-medium text-xs text-[#475467]">
        <ul className="flex items-center space-x-2">
          <li className="hover:text-[#1989F0]">ქვიზები</li>
          <div className="h-1 w-1 rounded-full bg-[#EAECF0] mr-2"></div>
          <li className="hover:text-[#1989F0]">ფოტო გალერეა</li>
          <div className="h-1 w-1 rounded-full bg-[#EAECF0] mr-2"></div>
        </ul>
        <div className="ml-4 flex space-x-2 h-4 cursor-pointer">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fecabookIcon} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="instagram"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
