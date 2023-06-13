import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";
import Description from "../../mainNewsFeed/description";
import { ItemTypes } from "./Item.types";

const Item: React.FC<ItemTypes> = ({ photo }) => {
  return (
    <div className="flex items-center justify-center w-full bg-[#FFFFFF] border-t-2 border-[#F2F4F7] overflow-auto p-2 mt-4">
      <div className="flex">
        <img src={photo} className="bg-cover rounded-lg w-[130px]" />
        <div className="px-2 overflow-hidden">
          <div className="flex items-center space-x-4">
            <div className="flex xl:space-x-1 xl:visible invisible">
              <img src={clockIcon} alt="clockIcon" />
              <p className="xl:block hidden text-[#667085] text-[Helvetica] text-xs w-24">
                24 წუთის წინ
              </p>
            </div>
            <div className="space-x-12 flex items-center justify-center">
              <p className="text-[#667085] text-[Helvetica] text-xs bg-[#F2F4F7] py-1 xl:px-2 px-2 rounded-2xl">
                პოლიტიკა
              </p>
              <p className="xl:invisible visible text-[#667085] w-12 text-[Helvetica] text-xs font-medium">
                24 წთ
              </p>
            </div>
          </div>
          <Description
            font={"xl:text-sm text-xs"}
            text={
              "ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
