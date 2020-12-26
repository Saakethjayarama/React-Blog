import React from "react";
import Landing from "../Landing/Landing";
import "./Dashboard.css";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  return (
    <div className="Dashboard">
      <Landing admin />
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
