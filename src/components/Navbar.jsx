import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          OutletCompass
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/malls">Malls</Link>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;