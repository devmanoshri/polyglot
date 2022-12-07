import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ApplicationForm from "./ApplicationForm";
function ApplicationAdd() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div>
        <Button variant="success" onClick={() => setShowForm(!showForm)}>
          + Add Application
        </Button>
      </div>
      <hr />
      {showForm && <ApplicationForm />}
    </>
  );
}

export default ApplicationAdd;
