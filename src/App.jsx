import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoute from "./routes/PrivateRoute";
import Calendar from "./components/calendar/Calendar";
import Staff from "./components/staff/Staff";
import Wage from "./components/wage/Wage";
import Setting from "./components/setting/Setting";
import Signup from "./components/signup/Signup";
import Nav from "./components/nav/Nav";

function App() {
  useEffect(() => {});
  return (
    <BrowserRouter>
      <main className=" max-w-[900px]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Pages only can aceess for user */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Calendar />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/wage" element={<Wage />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>

        <Nav />
      </main>
    </BrowserRouter>
  );
}

export default App;
