import React from "react";
import Landing from "../Landing/Landing";
import "./Dashboard.css";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function Dashboard() {
  const history = useHistory();

  const cookies = new Map(
    document.cookie.split("; ").map((v) => v.split("=").map(decodeURIComponent))
  );

  let payload = {};
  cookies.forEach((value, key) => {
    payload[key] = value;
  });

  if (!payload.loggedIn) {
    history.push("/");
  }

  return (
    <div className="Dashboard">
      <Landing admin />
      <Fab
        color="primary"
        aria-label="add"
        className="Dashboard__FabLogout"
        onClick={() => {
          setCookie("loggedIn", null, -1);
          history.push("/");
        }}
      >
        <ExitToAppIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="add"
        className="Dashboard__Fab"
        onClick={() => {
          history.push("/new");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Dashboard;
