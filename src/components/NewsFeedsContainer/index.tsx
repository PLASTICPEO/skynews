import MainNewsFeed from "./mainNewsFeed";
import SideNewsFeed from "./sideNewsFeed";

const NewsFeedsContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-8 grid-cols-1 gap-4">
      <div className="xl:col-span-5">
        <MainNewsFeed />
      </div>
      <div className="xl:col-span-3 xl:mt-0 mt-6">
        <SideNewsFeed />
      </div>
    </div>
  );
};

export default NewsFeedsContainer;
