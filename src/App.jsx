import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoute from "./routes/PrivateRoute";
import Calendar from "./components/calendar/Calendar";
import Staff from "./components/staff/Staff";
import Wage from "./components/wage/Wage";
import Setting from "./components/setting/Setting";

function App() {
  useEffect(() => {});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Calendar />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/wage" element={<Wage />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
