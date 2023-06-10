import Banner from "./components/banner";
import HeaderProvider from "./components/header/context/HeaderContext";
import Header from "./pages/header";
import NewsFeed from "./pages/newsFeed";
import SideNewsFeed from "./pages/sideNewsFeed";

const App = () => {
  return (
    <div className="w-full xl:h-full h-screen bg-[#EAECF0]">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <div className="grid grid-cols-2">
        <NewsFeed />
        <SideNewsFeed />
      </div>
      <Banner />
    </div>
  );
};

export default App;
