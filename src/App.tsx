import DefaultLayout from "./layouts/default";
import Banner from "./components/banner";
import HeaderProvider from "./components/header/context/HeaderContext";
import Header from "./pages/header";
import NewsFeed from "./pages/newsFeed";
import SideNewsFeed from "./pages/sideNewsFeed";

const App = () => {
  return (
    <div className="w-full h-full bg-[#EAECF0]">
      <DefaultLayout>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <div className="grid grid-cols-2">
          <NewsFeed />
          <SideNewsFeed />
        </div>
        <Banner />
      </DefaultLayout>
    </div>
  );
};

export default App;
