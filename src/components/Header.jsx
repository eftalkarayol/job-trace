import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="job-trace">Job Trace</h2>
      <div>
        <NavLink to="/">Job List</NavLink>
        <NavLink to="add-job">Add Job</NavLink>
      </div>
    </header>
  );
};

export default Header;
