import React, { Children } from "react";
import Sidebar from "./Sidebar";
import Topper from "./Topper";
import Footer from "./Footer";
import Logout from "./Logout";

function Wrapper({ children }) {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Page Wrapper --> */}
        {/* <!-- Content Wrapper --> */}
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}

            <Topper />

            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}

            {children}

            {/* <Buttons /> */}

            {/* <!-- Page Heading --> */}

            {/* <!-- End of Main Content --> */}
          </div>
          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}

        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
      </div>

      <Logout />
    </>
  );
}

export default Wrapper;
