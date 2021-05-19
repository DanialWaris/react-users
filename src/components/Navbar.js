import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand">
          Users Dashboard
        </Link>

 
      </div>
    </nav>
  );
};

export default Navbar;

