import React from "react";
import Style from "./Header.css";

function Header() {
  return (
    <div className="Header">
      <a href="/">
        <img
          id="logo"
          src="https://firebasestorage.googleapis.com/v0/b/final-project-wbs.appspot.com/o/assets%2FSpoyou-logo-03.png?alt=media&token=fe97bc39-7e37-46e1-b891-1385a5f9dfa2"
          alt="logo"
        />
      </a>
    </div>
  );
}

export default Header;
