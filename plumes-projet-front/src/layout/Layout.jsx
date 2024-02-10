import { Outlet } from "react-router-dom";
import Footer from "../components/footer/index.jsx";
import Header from "../components/header/index.jsx";
import PageLayout from "./PageLayout.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <PageLayout>
        <Outlet />
        <Footer />
      </PageLayout>
      
    </>
  );
};

export default Layout;
