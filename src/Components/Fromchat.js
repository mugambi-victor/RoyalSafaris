import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <nav className={`navbar ${collapsed ? 'collapsed' : ''}`}>
        <div className="navbar-brand">Logo</div>
        {windowWidth <= 997 && (
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-icon">&#9776;</span>
          </button>
        )}
        <div className={`navbar-links ${collapsed && windowWidth <= 997 ? 'collapsed' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div className="content">
        {/* Rest of your content */}
      </div>
    </div>
  );
}

export default App;
