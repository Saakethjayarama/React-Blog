import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
  const history = useHistory();

  return (
    <div className="Header">
      <div
        className="Header__heading"
        onClick={() => {
          history.push("/");
        }}
      >
        Coder's Blog
      </div>
      <div className="Header__navlinks">
        <div className="Header__navlink">Login</div>
      </div>
    </div>
  );
}

export default Header;
