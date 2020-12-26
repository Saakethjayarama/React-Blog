import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
    </div>
  );
}

export default Header;
