import React, { useEffect, useState } from "react";
import ApplicationAlert from "./ApplicationAlert";
import ApplicationList from "./ApplicationList";
import Button from "react-bootstrap/Button";

const languages = [
  { value: "0", text: "-- Language --" },
  { value: "1", text: "English" },
  { value: "2", text: "Norwegian" },
  { value: "3", text: "Germany" },
];
// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem("list")));
//   } else {
//     return [];
//   }
// };
function ApplicationAdd() {
  const [application, setApplication] = useState({
    appName: "",
    appLanguage: "0",
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
  const [list, setList] = useState([]);
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
    } else {
      if (application.appLanguage == 0) {
        showAlert(true, "danger", "Please Select Application Language");
      } else {
        if (isEditing) {
          showAlert(true, "success", "Value Updated");
          //console.log("edit Id", editId);
          setList(
            list.map((item) => {
              if (item.id === editId) {
                return {
                  ...item,
                  appName: application.appName,
                  appLanguage: application.appLanguage,
                };
              }
            })
          );
          setApplication({
            appName: "",
            appLanguage: "0",
          });

          document.querySelector("#appLanguage").value = "0";
        } else {
          showAlert(true, "success", "New Application added");
          const newItem = {
            id: Date.now(),
            appName: application.appName,
            appLanguage: application.appLanguage,
          };
          setList([...list, newItem]);
          setApplication({
            appName: "",
            appLanguage: "0",
          });

          document.querySelector("#appLanguage").value = "0";
        }
      }
    }
  };
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
    const specificItem = list.find((item) => item.id === id);
    // console.log("edit block", specificItem["appName"]);
    setIsEditing(true);
    setEditId(id);
    // setAppName([...list, specificItem["appName"]]);
    setApplication({
      appName: specificItem["appName"],
      appLanguage: specificItem["appLanguage"],
    });

    document.querySelector("#appLanguage").value = specificItem["appLanguage"];
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
