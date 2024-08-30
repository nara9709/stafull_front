import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoute from "./routes/PrivateRoute";
import Staff from "./components/staff/Staff";
import Wage from "./components/wage/Wage";
import Setting from "./components/setting/Setting";
import Signup from "./components/signup/Signup";
import Nav from "./components/nav/Nav";
import Header from "./components/Header/Header";
import Monthly from "./components/calendar/Monthly";
import Daily from "./components/calendar/Daily";
import CreateStaff from "./components/staff/CreateStaff";

function App() {
  useEffect(() => {});
  return (
    <BrowserRouter>
      <main className=" max-w-[900px] px-5 bg-greyBgLight h-[100vh] m-auto">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Pages only can aceess for user */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Monthly />} />

            <Route path="/calendar" element={<Monthly />} />
            <Route path="/calendar/daily/:id" element={<Daily />} />

            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/create" element={<CreateStaff />} />
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
