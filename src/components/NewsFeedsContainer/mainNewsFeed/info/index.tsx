import { InfoTypes } from "./info.types";
import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";

const Info: React.FC<InfoTypes> = ({
  time,
  category,
  timeStyle,
  categoryStyle,
}) => {
  return (
    <div className="flex items-center xl:space-x-2 mt-3">
      <div className="flex xl:space-x-1">
        <img src={clockIcon} alt="" />
        <p
          className={`${timeStyle} text-[#667085] text-Helvetica  font-medium`}
        >
          {time} წუთის წინ
        </p>
      </div>
      <p
        className={`${categoryStyle} text-[#667085]  leading-5 tracking-wider not-italic font-case font-Helvetica font-bold bg-[#F2F4F7] py-1 px-2 rounded-2xl`}
      >
        {category}
      </p>
    </div>
  );
};

export default Info;
