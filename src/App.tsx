import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";
import Politic from "./pages/politic";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/politic"
        element={
          <DefaultLayout>
            <Politic />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
