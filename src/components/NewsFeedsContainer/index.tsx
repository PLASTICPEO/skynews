import MainNewsFeed from "./mainNewsFeed";
import SideNewsFeed from "./sideNewsFeed";
import Banner from "../banner";

const NewsFeedsContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-10 grid-cols-10 gap-4 xl:pt-5 ">
      <div className="xl:col-span-6 col-span-6">
        <MainNewsFeed />
      </div>
      <div className="xl:col-span-4 col-span-4">
        <SideNewsFeed />
      </div>
      <div className="xl:col-span-10">
        <Banner />
      </div>
    </div>
  );
};

export default NewsFeedsContainer;
