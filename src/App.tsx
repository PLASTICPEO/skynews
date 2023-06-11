import DefaultLayout from "./layouts/default";
import Banner from "./components/banner";
import NewsFeedsContainer from "./components/NewsFeedsContainer";

const App = () => {
  return (
    <div className="w-full h-full bg-[#EAECF0] pt-44">
      <DefaultLayout>
        <NewsFeedsContainer />
        <Banner />
      </DefaultLayout>
    </div>
  );
};

export default App;
