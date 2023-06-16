import NewsPhoto from "./newsPhoto";
import Info from "./info";
import Description from "./description";

const MainNewsFeed = () => {
  return (
    <div className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg shadow-sm">
      <NewsPhoto />
      <Info
        time="10"
        category="ეკონომიკა"
        timeStyle="text-sm"
        categoryStyle="text-xs"
      />
      <Description
        fontSize="text-2xl"
        text="ავიაციის სააგენტო: საქართველო-რუსეთს შორის პირდაპირი რეგულარული ფრენები არ ხორციელდება"
      />
    </div>
  );
};

export default MainNewsFeed;
