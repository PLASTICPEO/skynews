import clockIcon from "../../../assets/newsFeedsPhotoTest/clockIcon.svg";
import newsPhoto from "../../../assets/newsFeedsPhotoTest/Rectangle 4.png";

const Item = () => {
  return (
    <div className="flex w-full bg-[#FFFFFF] border-b-2 overflow-auto p-2">
      <img src={newsPhoto} className="w-36 h-36 bg-cover rounded-lg" />
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <img src={clockIcon} alt="clockIcon" className="bg-cover" />
            <p className="text-[#667085] text-[Helvetica] xl:text-sm text-xs font-medium">
              10 წუთის წინ
            </p>
          </div>
          <p className="text-[#667085] text-[Helvetica] text-xs  font-bold bg-[#F2F4F7] py-1 xl:px-3 px-2 rounded-2xl">
            ეკონომიკა
          </p>
        </div>
        <p className="text-base font-[Helvetica] text-clip ">
          ავიაციის სააგენტო: საქართველო-რუსეთს შორის პირდაპირი რეგულარული
          ფრენები არ ხორციელდება
        </p>
      </div>
    </div>
  );
};

export default Item;
