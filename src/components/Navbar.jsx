import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">Dinesh</a>
        <div>
          <a className="btn btn-primary" href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
