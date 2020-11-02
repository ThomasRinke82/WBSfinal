import React from "react";
import "./Header.css";

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
      <a href="/user_selection">
        <img
          id="portrait"
          src="https://firebasestorage.googleapis.com/v0/b/final-project-wbs.appspot.com/o/assets%2F12080380_1083536398347407_5481510197838210309_o.jpg?alt=media&token=245654a2-ebb2-44de-a21e-f1856c2717d6"
          alt="profile"
        />
      </a>
    </div>
  );
}

export default Header;
