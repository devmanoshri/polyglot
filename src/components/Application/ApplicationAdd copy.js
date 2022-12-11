import React, { useEffect, useState } from "react";
import ApplicationAlert from "./ApplicationAlert";
import ApplicationList from "./ApplicationList";
import Button from "react-bootstrap/Button";
//import Select from "react-select";
import { Multiselect } from "multiselect-react-dropdown";
const languages = [
  { id: "1", name: "English" },
  { id: "2", name: "Norwegian" },
  { id: "3", name: "Germany" },
  { id: "10", name: "French" },
  { id: "12", name: "Bengali" },
];

//const selectedValues = [];
var selectedValues = [];

function ApplicationAdd() {
  const [application, setApplication] = useState({
    appName: "",
    appLanguage: [{ id: 0, name: "" }],
  });

  const [showForm, setShowForm] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  // const [selectedOption, setSelectedOption] = useState([]);

  const setAppName = (e) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appName: e.target.value,
    }));
  };

  // const setLanguages = (e) => {
  //   setApplication((existingValue) => ({
  //     ...existingValue,
  //     appLanguage: e.target.value,
  //   }));
  // };
  //  var setLanguages = (e) => {
  //    setSelectedOption(Array.isArray(e) ? e.map((x) => x.value) : []);
  //  };
  //console.log("added items lang:", application.appLanguage.length);
  const languageOnRemove = (data) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appLanguage: data,
    }));
  };
  const languageOnSelect = (e) => {
    console.log(e);
    setApplication((existingValue) => ({
      ...existingValue,
      appLanguage: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (isValidData()) {
      saveData();
    }

    const showAlert = (show = false, type = "", msg = "") => {
      setAlert({ show, type, msg });
    };
    if (!application.appName) {
      showAlert(true, "danger", "Please Enter Application Name");
    } else {
      if (application.appLanguage.length === 0) {
        showAlert(true, "danger", "Please Select Application Language");
      } else {
        if (isEditing) {
          console.log("edit Id", application.appLanguage);
          setList(
            list.map((item) => {
              if (item.id === editId) {
                return {
                  ...item,
                  appName: application.appName,
                  appLanguage: JSON.stringify(application.appLanguage),
                };
              }
            })
          );
          setApplication({
            appName: "",
            appLanguage: [],
          });
          showAlert(true, "success", "Value Updated");
        } else {
          console.log("here", application.appLanguage);
          const newItem = {
            id: Date.now(),
            appName: application.appName,
            appLanguage: JSON.stringify(application.appLanguage),
          };
          setList([...list, newItem]);
          console.log(list);
          var selectedValues = "";
          setApplication({
            appName: "",
            appLanguage: "",
          });
          showAlert(true, "success", "New Application added");
        }
      }
    }
  };

  const isValidData = () => {};

  const saveData = () => {};

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "All the values has been deleted");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    console.log("edit block", selectedItem["appLanguage"]);
    //selectedItem["appLanguage"] = [{ id: "2", name: "Norwegian" },{id: '10', name: 'French'}];
    setIsEditing(true);
    setEditId(id);
    // setLanguages(selectedItem["appLanguage"]);
    // setAppName([...list, selectedItem["appName"]]);
    setApplication({
      appName: selectedItem["appName"],
      // appLanguage: [{ id: "2", name: "norwegian" }],
    });
    selectedValues = JSON.parse(selectedItem["appLanguage"]);
    document.querySelector("#appLanguage").value = selectedItem["appLanguage"];
  };

  // useEffect(() => {
  //   localStorage.setList("listFromStorage", JSON.stringify(list));
  // }, [list]);
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
            {alert.show && (
              <ApplicationAlert
                {...alert}
                removeAlert={showAlert}
                list={list}
              />
            )}
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

              <select
                className="form-control"
                id="appLanguage"
                name="appLanguage"
                onChange={languageOnSelect}
                multiple={true}
              >
                {languages.map((language, index) => {
                  return (
                    <option
                      defaultValue={selectedValues.indexOf(language.id) > -1}
                      value={language.id}
                      key={index}
                    >
                      {language.name}
                    </option>
                  );
                })}
              </select>
              {/* <Multiselect
                id="appLanguage"
                closeIcon="close"
                placeholder="Choose Language"
                options={languages}
                displayValue="name"
                selectedValues={selectedValues} //Preselected value to persist in dropdown
                onSelect={languageOnSelect} // Function will trigger on select event
                onRemove={languageOnRemove} // Function will trigger on remove event
                //ref={multiselectRefTracker}
              /> */}
            </div>

            <button type="submit" className="btn btn-primary">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      )}

      <div className="applicationListContainer">
        <h3>Application List</h3>
        {list.length > 0 ? (
          <>
            <ApplicationList
              items={list}
              removeItem={removeItem}
              editItem={editItem}
            />
            <button className="clear-btn" onClick={clearList}>
              Clear Items
            </button>
          </>
        ) : (
          "List is empty."
        )}
      </div>
    </>
  );
}

export default ApplicationAdd;
