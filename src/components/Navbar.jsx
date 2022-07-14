import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Site name
        </a>
        <ul>
          <li>
            <a href="/pricing">pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
