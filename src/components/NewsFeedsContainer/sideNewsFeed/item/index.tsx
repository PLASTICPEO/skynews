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
      className={`flex items-center space-x-4   xl:py-4 py-2  ${itemBorder} bg-[#FFFFFF] border-[#F2F4F7]`}
    >
      <div className="xl:w-56 w-40">
        <img src={photo} alt="thumbnail" />
      </div>

      <div className="w-full">
        <div className="xl:flex grid grid-cols-2 xl:space-x-2">
          <div className="flex items-center xl:justify-start justify-end space-x-2 xl:order-1 order-2">
            <img src={clockIcon} alt="clock" className="w-3" />
            <div className="flex items-center space-x-1">
              <p className="text-xs text-[#667085]">{time}</p>
              <p className="xl:block hidden text-xs text-[#667085]">
                წუთის წინ
              </p>
            </div>
          </div>
          <div className="flex items-center xl:justify-end justify-start xl:order-2 order-1">
            {category ? (
              <p className="text-sm text-[#667085]  font-[Helvetica] font-case bg-[#F2F4F7] xl:px-3 px-1.5 xl:py-0.5 rounded-full">
                {category}
              </p>
            ) : null}
          </div>
        </div>
        <div className="py-2 break-words">
          <p className="xl:text-xl text-sm w-70 xl:line-clamp-none line-clamp-1">
            {title}
          </p>
          <Description
            text={text}
            style="xl:text-sm text-xs xl:line-clamp-none line-clamp-2   text-[#101828] "
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
