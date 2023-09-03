import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";
import Description from "../../../../components/NewsFeedsContainer/mainNewsFeed/description/index";

const Item: React.FC<{
  photo: any;
  text?: string;
  border?: boolean;
  time: string | number;
  category?: string;
  title?: string;
}> = ({ photo, text, border, time, category, title }) => {
  const itemBorder = border ? "border-b-[1px]" : "";

  return (
    <div
      className={`flex items-center space-x-4 py-4  ${itemBorder} bg-[#FFFFFF] border-[#F2F4F7]`}
    >
      <img src={photo} alt="thumbnail" className="xl:h-28 h-10" />
      <div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-0.5">
            <img src={clockIcon} alt="clock" className="w-3" />
            <p className="text-xs text-[#667085]">{time} წუთის წინ</p>
          </div>
          {category ? (
            <p className="text-sm text-[#667085] font-[Helvetica] font-case bg-[#F2F4F7] px-3 py-0.5 rounded-full">
              {category}
            </p>
          ) : null}
        </div>
        <div>
          <p className="text-xl">{title}</p>
          <Description
            text={text}
            style="xl:text-sm text-xs word-brake text-[#101828]"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
