import DefaultLayout from "./layouts/default";
import Banner from "./components/banner";
import NewsFeed from "./components/newsFeed";
import SideNewsFeed from "./components/sideNewsFeed";

const App = () => {
  return (
    <div className="w-full h-full bg-[#EAECF0]">
      <DefaultLayout>
        <div className="xl:grid xl:grid-cols-2 grid-cols-1 mt-44 xl:pt-5">
          <NewsFeed />
          <SideNewsFeed />
        </div>
        <Banner />
      </DefaultLayout>
    </div>
  );
};

export default App;
