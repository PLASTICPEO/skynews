import NewsPhoto from "../../components/newsFeed/newsPhoto";
import Info from "../../components/newsFeed/info";
import Description from "../../components/newsFeed/description";

const NewsFeed = () => {
  return (
    <div className="flex flex-col xl:space-x-1 xl:w-[704px] w-full h-auto p-4 bg-[#FFFFFF] xl:mt-10 mt-2  xl:ml-28 rounded-lg shadow-sm">
      <NewsPhoto />
      <Info />
      <Description />
    </div>
  );
};

export default NewsFeed;
