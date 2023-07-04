import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";
import Description from "../../mainNewsFeed/description";
import { ItemTypes } from "./Item.types";

const Item: React.FC<ItemTypes> = ({
  photo,
  descriptionFont,
  text,
  title,
  border,
  titleFontSize,
  time,
  category,
}) => {
  return (
    <div
      className={`flex items-center ${
        border ? "border-b-[1px]" : ""
      } bg-[#FFFFFF] border-[#F2F4F7]`}
    >
      <div className="flex py-5">
        <img src={photo} className="bg-cover rounded" />
        <div className="ml-4 overflow-hidden">
          <div className="flex items-center">
            <div className="flex xl:visible invisible">
              <img src={clockIcon} alt="clockIcon" />
              <p className="xl:block hidden text-[#667085] text-[Helvetica] text-xs ml-1">
                {time} წუთის წინ
              </p>
            </div>
            <div className="space-x-12 ml-2 flex items-center justify-center">
              {category ? (
                <p className="text-[#667085] text-[13px] leading-4 tracking-wider not-italic font-case font-Helvetica font-bold bg-[#F2F4F7] px-2 py-1 rounded-2xl">
                  {category}
                </p>
              ) : null}
              <p className="xl:invisible visible text-[#667085] w-12 text-xs font-medium">
                24 წთ
              </p>
            </div>
          </div>
          <p className={`${titleFontSize}`}>{title}</p>
          <Description style={descriptionFont} text={text} />
        </div>
      </div>
    </div>
  );
};

export default Item;
