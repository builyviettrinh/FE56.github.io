import HomePage from "./../container/HomeTemplate/HomePage";
import AboutPage from "./../container/HomeTemplate/AboutPage";
import ListMoviePage from "./../container/HomeTemplate/ListMoviePage";
import DetailMovie from "./../container/HomeTemplate/DetailPage";
import HocPage from "./../container/HomeTemplate/HocPage";
import DemoHOOK from "../container/HomeTemplate/HOOK";

import Dashboard from "./../container/AdminTemplate/Dashboard";
import AddUser from "./../container/AdminTemplate/AddUserPage";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
  },
  {
    path: "/list-movie",
    component: ListMoviePage,
    exact: false,
  },
  {
    path: "/detail/:id",
    component: DetailMovie,
    exact: false,
  },
  {
    path: "/hoc",
    component: HocPage,
    exact: false,
  },
  {
    path: "/hook",
    component: DemoHOOK,
    exact: false,
  },
];

const routesAdmin = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: false,
  },
  {
    path: "/add-user",
    component: AddUser,
    exact: false,
  },
];

export { routeHome, routesAdmin };
