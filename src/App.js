import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SinglePage from "./pages/single/SinglePage";
import NewPage from "./pages/new/NewPage";
import { userInputs } from "./formSource";
import { productInputs } from "./formSource";
import "./components/style.scss";

import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext/DarkModeProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "app dark" : "app"}`}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="products">
              <Route
                index
                element={<List page={"products"} title={"Product"} />}
              />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
            <Route path="users">
              <Route index element={<List page={"users"} title={"User"} />} />
              <Route path=":usertId" element={<SinglePage />} />
              <Route
                path="new"
                element={<NewPage inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
