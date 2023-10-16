import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="app">
        <Outlet />
      </div>
    </>
  );
};

export default App;
