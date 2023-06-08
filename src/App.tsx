import Header from "./components/header";
import HeaderProvider from "./context/HeaderContext";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#EAECF0]">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
    </div>
  );
};

export default App;
