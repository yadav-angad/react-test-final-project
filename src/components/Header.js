import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="title">React Training Final Project</div>
        <nav>
          <button>
            <Link to="/" className="menu">Home</Link>
          </button>
          <button>
            <Link to="/user" className="menu">User</Link>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
