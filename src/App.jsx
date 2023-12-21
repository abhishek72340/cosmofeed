import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import PageNotFound from "../src/pages/PageNotFound";
import RequireAuth from "./component/RequireAuth";
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
