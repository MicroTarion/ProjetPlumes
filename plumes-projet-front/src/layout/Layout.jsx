import { Outlet } from "react-router-dom";
import Footer from "../components/footer/index.jsx";
import Header from "../components/header/index.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;