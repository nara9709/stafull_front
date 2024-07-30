import Calendar from "../Calendar";
import Setting from "../Setting";
import Staff from "../Staff";
import Wage from "../Wage";
import { createBrowserRouter } from "react-router-dom";

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
