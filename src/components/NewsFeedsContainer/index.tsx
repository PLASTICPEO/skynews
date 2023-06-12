import MainNewsFeed from "./mainNewsFeed";
import SideNewsFeed from "./sideNewsFeed";

const NewsFeedsContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-3 grid-cols-1 gap-4 xl:pt-5 ">
      <div className="xl:col-span-2">
        <MainNewsFeed />
      </div>
      <div className="xl:col-span-1">
        <SideNewsFeed />
      </div>
    </div>
  );
};

export default NewsFeedsContainer;
