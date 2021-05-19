import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/")
  }
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




// "homepage": "http://DanialWaris.github.io/crud-app",
// "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"