import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div >
     {/* <NavBar /> */}
          {props.children}
      <Footer />
    </div>
  );
}
export default Layout;
