import { InfoTypes } from "./info.types";
import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";

const Info: React.FC<InfoTypes> = ({
  time,
  category,
  timeStyle,
  categoryStyle,
}) => {
  return (
    <div className="flex items-center  sm:justify-between space-x-2 mt-3">
      <div className="flex space-x-1">
        <img src={clockIcon} alt="" />
        <p
          className={`${timeStyle} xl:text-sm text-xs text-[#667085] text-Helvetica  font-medium`}
        >
          {time} წუთის წინ
        </p>
      </div>
      <p
        className={`${categoryStyle} text-[#667085]  leading-5 tracking-wider not-italic font-case font-Helvetica font-bold bg-[#F2F4F7]  px-2 py-1 rounded-2xl`}
      >
        {category}
      </p>
    </div>
  );
};

export default Info;
