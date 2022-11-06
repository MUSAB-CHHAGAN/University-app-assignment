/** @format */

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PageNotFoundScreen from "../screens/PageNotFoundScreen/PageNotFoundScreen";
import UniversitiesScreen from "../screens/UniversitiesScreen/UniversitiesScreen";

const routes = [
  {
    path: "/",
    name: "landing",
    component: HomeScreen,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/universities",
    name: "Universities",
    component: UniversitiesScreen,
  },
  {
    path: "/universities/:country",
    name: "Universities",
    component: UniversitiesScreen,
  },
  {
    path: "*",
    name: "page Not Found",
    component: PageNotFoundScreen,
  },
];

export default routes;
