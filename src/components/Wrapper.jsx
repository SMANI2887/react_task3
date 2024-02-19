import React, { Children } from "react";
import Sidebar from "./Sidebar";
import Topper from "./Topper";
import Footer from "./Footer";
import Logout from "./Logout";

function Wrapper({ children }) {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topper />

            {children}
          </div>

          <Footer />
        </div>
      </div>

      <Logout />
    </>
  );
}

export default Wrapper;
