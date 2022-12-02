import React, { useEffect } from "react";

function ApplicationAlert({ type, msg, list, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default ApplicationAlert;
