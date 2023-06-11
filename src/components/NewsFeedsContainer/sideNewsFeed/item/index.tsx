import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";
import newsPhoto from "../../../../assets/newsFeedsPhotoTest/Rectangle 4.png";

const Item = () => {
  return (
    <div className="flex w-full bg-[#FFFFFF] border-b-2 overflow-auto p-2">
      <img src={newsPhoto} className="w-36 h-36 bg-cover rounded-lg" />
      <div className="p-4 overflow-hidden">
        <div className="flex items-center space-x-2">
          <div className="flex xl:space-x-2 xl:visible invisible">
            <img src={clockIcon} alt="clockIcon" />
            <p className="xl:block hidden text-[#667085] text-[Helvetica] xl:text-sm text-xs font-medium">
              10 წუთის წინ
            </p>
          </div>
          <div className="space-x-14 flex items-center justify-center mb-1">
            <p className="text-[#667085] text-[Helvetica] text-xs  font-bold bg-[#F2F4F7] py-1 xl:px-3 px-2 rounded-2xl">
              ეკონომიკა
            </p>
            <p className="xl:invisible visible text-[#667085] w-12 text-[Helvetica] text-xs font-medium">
              10 წთ
            </p>
          </div>
        </div>
        <p className="xl:text-base text-xs font-[Helvetica] text-clip">
          ავიაციის სააგენტო: საქართველო-რუსეთს შორის პირდაპირი რეგულარული
          ფრენები არ ხორციელდება
        </p>
      </div>
    </div>
  );
};

export default Item;
