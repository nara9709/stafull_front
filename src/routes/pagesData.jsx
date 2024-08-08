import Calendar from "../components/calendar/Calendar";
import Setting from "../components/setting/Setting";
import Staff from "../components/staff/Staff";
import { createBrowserRouter } from "react-router-dom";
import Wage from "../components/wage/Wage";
import Login from "../components/login/login";
import Signup from "../components/login/signup";

const pagesData = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    title: "login",
  },
  {
    path: "/calendar",
    element: <Calendar />,
    title: "calendar",
  },
  {
    path: "/wage",
    element: <Wage />,
    title: "wage",
  },
  {
    path: "/staff",
    element: <Staff />,
    title: "staff",
  },
  {
    path: "/login",
    element: <Login />,
    title: "login",
  },
  {
    path: "/signup",
    element: <Signup />,
    title: "signup",
  },
  {
    path: "/setting",
    element: <Setting />,
    title: "setting",
  },
]);

export default pagesData;
