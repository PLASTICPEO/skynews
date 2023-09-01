import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import ContextProvider from "./context/HeaderContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);
