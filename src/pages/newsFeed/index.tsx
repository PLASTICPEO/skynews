import NewsPhoto from "../../components/newsFeed/newsPhoto";
import Info from "../../components/newsFeed/info";
import Description from "../../components/newsFeed/description";

const NewsFeed = () => {
  return (
    <div className="flex flex-col  bg-[#FFFFFF] rounded-lg shadow-sm">
      <NewsPhoto />
      <Info />
      <Description />
    </div>
  );
};

export default NewsFeed;
