//import React, { useState } from "react";
//import styled from "styled-components";
//import Button from "react-bootstrap/Button";
import ApplicationAdd from "../components/Application/ApplicationAdd";
//import ApplicationList from "../components/Application/ApplicationList";

function Application() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <div className="application-main">
      <div className="application-management item">
        <ApplicationAdd />
      </div>
      <div className="application-details item">div2</div>
    </div>
  );
}

export default Application;
