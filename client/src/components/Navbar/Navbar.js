import React from "react";
import Loading from "../Loading/Loading";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1 className="text-danger border-white">Elit</h1>
      <Loading />
    </nav>
  );
};

export default Navbar;
