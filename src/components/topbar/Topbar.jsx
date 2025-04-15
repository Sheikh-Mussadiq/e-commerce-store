import React from "react";

import Cart from "./Cart";
import Navbar from "./Navbar";
import Userprofile from "./Userprofile";
import Searchbar from "./searchbar";

const Topbar = () => {
  return (
    <>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Cart></Cart>
      <Userprofile></Userprofile>
    </>
  );
};

export default Topbar;
