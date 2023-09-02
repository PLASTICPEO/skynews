import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";
import Politic from "./pages/politic";
import Found from "./pages/found";
import Contact from "./pages/contact";

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
        path="/პოლიტიკა"
        element={
          <DefaultLayout>
            <Politic />
          </DefaultLayout>
        }
      />
      <Route
        path="/კონტაქტი"
        element={
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        }
      />
      <Route path="/მოძიებული/:category" element={<Found />} />
    </Routes>
  );
};

export default App;
