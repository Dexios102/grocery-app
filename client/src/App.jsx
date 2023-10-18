import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <section className="bg-slate-800">
        <Outlet />
      </section>
    </main>
  );
};

export default App;
