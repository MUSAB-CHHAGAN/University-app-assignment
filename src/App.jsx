/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import routes from "./routes/routes";

function App() {
  return (
    <SearchAppBar>
      {
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.path === "/" ||
                route.path === "/universities" ? (
                  <Navigate to="/home" />
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      }
    </SearchAppBar>
  );
}

export default App;
