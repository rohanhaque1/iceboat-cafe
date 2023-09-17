import { Outlet } from "react-router-dom";
import Navbar from "../components/SharedComponent/NavigationBar/Navbar";
import Footer from "../components/SharedComponent/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
