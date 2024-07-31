import Calendar from "../components/calendar/Calendar";
import Setting from "../components/setting/Setting";
import Staff from "../components/staff/Staff";
import { createBrowserRouter } from "react-router-dom";
import Wage from "../components/wage/Wage";

const pagesData = createBrowserRouter([
  {
    path: "/",
    element: <Calendar />,
    title: "main",
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
    path: "/setting",
    element: <Setting />,
    title: "setting",
  },
]);

export default pagesData;
