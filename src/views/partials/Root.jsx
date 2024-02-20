import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components/UI/index";

const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Root;
