import React, { useState } from "react";
import ApplicationAlert from "./ApplicationAlert";
import ApplicationList from "./ApplicationList";
import Button from "react-bootstrap/Button";

const languages = [
  { value: "1", text: "English" },
  { value: "2", text: "Norwegian" },
  { value: "3", text: "Germany" },
];
function ApplicationAdd() {
  // const [application, setApplication] = useState({
  //   applicationName: "",
  //   applicationLanguage: {},
  // });
  const [application, setApplication] = useState({
    appName: "",
    appLanguage: "",
  });

  const setAppName = (e) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appName: e.target.value,
    }));
  };
  const setLanguages = (e) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appLanguage: e.target.value,
    }));
  };

  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  console.log("added items:", list);
  const handelSubmit = (e) => {
    e.preventDefault();
    const showAlert = (show = false, type = "", msg = "") => {
      setAlert({ show, type, msg });
    };
    if (!application.appName) {
      showAlert(true, "danger", "Please Enter Application Name");
      console.log("not name");
    } else if (!application.appName && isEditing) {
      console.log("edit block");
    } else {
      console.log("next item:", application.appLanguage);
      showAlert(true, "success", "New Application added");
      const newItem = {
        id: new Date().getTime().toString,
        appName: application.appName,
        appLanguage: application.appLanguage,
      };
      setList([...list, newItem]);
      //setApplication("");
    }
  };
  return (
    <>
      <div>
        <Button variant="success" onClick={() => setShowForm(!showForm)}>
          + Add Application
        </Button>
      </div>
      <hr />
      {showForm && (
        <div className="applicationFormContainer">
          <form className="applicationForm" onSubmit={handelSubmit}>
            {alert.show && <ApplicationAlert />}
            <h3>Add New Application</h3>
            <div className="form-group">
              <label htmlFor="appName">
                Application Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="appName"
                id="appName"
                placeholder="Enter Application Name"
                value={application.appName}
                onChange={setAppName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="languages">
                Select Languages <span className="text-danger">*</span>
              </label>
              {/* <select
                className="form-control"
                id="languages"
                name="languages"
                // value={application.applicationLanguage}
                // onChange={(e) => setApplication(e.target.value)}
              >
                <option value="1">English</option>
                <option value="2">Norwegian</option>
                <option value="3">Germany</option>
                <option value="4">French</option>
              </select> */}
              <select
                className="form-control"
                name="appLanguage"
                onChange={setLanguages}
              >
                {languages.map((language, index) => {
                  return (
                    <option value={language.value} key={index}>
                      {language.text}
                    </option>
                  );
                })}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      )}

      <div className="applicationListContainer">
        <h3>Application List</h3>
        {list.length > 0 ? <ApplicationList items={list} /> : "List is empty."}
      </div>
    </>
  );
}

export default ApplicationAdd;
