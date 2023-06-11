import DefaultLayout from "./layouts/default";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="w-full h-full bg-[#EAECF0] pt-44">
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </div>
  );
};

export default App;
