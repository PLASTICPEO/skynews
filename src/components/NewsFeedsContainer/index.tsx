import MainNewsFeed from "./mainNewsFeed";
import SideNewsFeed from "./sideNewsFeed";

const NewsFeedsContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-12 grid-cols-10 gap-6 xl:pt-5 ">
      <div className="xl:col-span-7 col-span-6">
        <MainNewsFeed />
      </div>
      <div className="xl:col-span-5 col-span-4">
        <SideNewsFeed />
      </div>
    </div>
  );
};

export default NewsFeedsContainer;
