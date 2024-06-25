// Navbar.jsx
import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const Navbar = ({ selectedCountry, setSelectedCountry }) => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState('light'); // default theme is 'light';

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo">NewsPulse</Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={handleClick}>General</Link></li>
          <li className="nav-item"><Link to="/entertainment" className="nav-link" onClick={handleClick}>Entertainment</Link></li>
          <li className="nav-item"><Link to="/health" className="nav-link" onClick={handleClick}>Health</Link></li>
          <li className="nav-item"><Link to="/science" className="nav-link" onClick={handleClick}>Science</Link></li>
          <li className="nav-item"><Link to="/sports" className="nav-link" onClick={handleClick}>Sports</Link></li>
          <li className="nav-item"><Link to="/technology" className="nav-link" onClick={handleClick}>Technology</Link></li>
          <li className="nav-item">
            <select value={selectedCountry} onChange={handleCountryChange} className="country-dropdown">
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="il">Israel</option>
              <option value="jp">Japan</option>
              <option value="mx">Mexico</option>
              <option value="ca">Canada</option>
              <option value="at">Austria</option>
              <option value="nz">New Zealand</option>
            </select>
          </li>
          <label className="ui-switch">
            <input type="checkbox" onClick={handleThemeChange} />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </ul>
        <div className={click ? "hamburger active" : "hamburger"} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
