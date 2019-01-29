import React from 'react';
import { environment } from '../FormBuilder/formConfig.js';

export const Header = () => {
  if (environment.css === 'Bootstrap') {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">itenium</div>
      </nav>
    );
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <div className="menu-text">itenium</div>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    </div>
  );
};
