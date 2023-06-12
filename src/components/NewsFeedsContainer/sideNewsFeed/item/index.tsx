import clockIcon from "../../../../assets/newsFeedsPhotoTest/clockIcon.svg";

const Item = ({ photo }: any) => {
  return (
    <div className="flex items-center justify-center w-full bg-[#FFFFFF] border-b-2 overflow-auto p-2">
      <img src={photo} className="bg-cover rounded-lg w-[130px]" />
      <div className="px-2 overflow-hidden">
        <div className="flex items-center space-x-4">
          <div className="flex xl:space-x-1 xl:visible invisible">
            <img src={clockIcon} alt="clockIcon" />
            <p className="xl:block hidden text-[#667085] text-[Helvetica] text-xs w-24">
              10 წუთის წინ
            </p>
          </div>
          <div className="space-x-12 flex items-center justify-center">
            <p className="text-[#667085] text-[Helvetica] text-xs bg-[#F2F4F7] py-1 xl:px-2 px-2 rounded-2xl">
              ეკონომიკა
            </p>
            <p className="xl:invisible visible text-[#667085] w-12 text-[Helvetica] text-xs font-medium">
              10 წთ
            </p>
          </div>
        </div>
        <p className="xl:text-sm text-xs font-[Helvetica] text-clip">
          ავიაციის სააგენტო: საქართველო-რუსეთს შორის პირდაპირი რეგულარული
          ფრენები არ ხორციელდება
        </p>
      </div>
    </div>
  );
};

export default Item;
