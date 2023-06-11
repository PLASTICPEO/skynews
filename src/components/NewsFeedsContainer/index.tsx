import MainNewsFeed from "./mainNewsFeed";
import SideNewsFeed from "./sideNewsFeed";

const NewsFeedsContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 grid-cols-1 xl:pt-5 ">
      <MainNewsFeed />
      <SideNewsFeed />
    </div>
  );
};

export default NewsFeedsContainer;
