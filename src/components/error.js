import React from "react";
import Navbar from "./global-components/navbar-v2";
import ErrorPage from "./section-components/error";
import Footer from "./global-components/footer";

const Error = () => {
  return (
    <div>
      <Navbar />
      <ErrorPage />
      <Footer />
    </div>
  );
};

export default Error;
