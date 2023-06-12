import NewsPhoto from "./newsPhoto";
import Info from "./info";
import Description from "./description";

const MainNewsFeed = () => {
  return (
    <div className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg shadow-sm">
      <NewsPhoto />
      <Info />
      <Description />
    </div>
  );
};

export default MainNewsFeed;
