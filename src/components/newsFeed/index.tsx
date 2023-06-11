import NewsPhoto from "./newsPhoto";
import Info from "./info";
import Description from "./description";

const NewsFeed = () => {
  return (
    <div className="flex flex-col xl:mr-5 p-4 bg-[#FFFFFF] rounded-lg shadow-sm">
      <NewsPhoto />
      <Info />
      <Description />
    </div>
  );
};

export default NewsFeed;
