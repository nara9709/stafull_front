import { useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  useEffect(() => {
    location("/login");
  });
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
