import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
};

export default App;
