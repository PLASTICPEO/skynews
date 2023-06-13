import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";

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
    </Routes>
  );
};

export default App;
