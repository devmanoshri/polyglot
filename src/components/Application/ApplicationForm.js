import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_application } from "../../actions/index";
import InputField from "../../form-elements/InputField";
import Checkbox from "../../form-elements/Checkbox";
//import handelSubmit from "./ApplicationFormSubmit";
const languages = [
  { id: "1", name: "English" },
  { id: "2", name: "Norwegian" },
  { id: "3", name: "Germany" },
  { id: "10", name: "French" },
  { id: "12", name: "Bengali" },
];
function ApplicationForm() {
  const [application, setApplication] = useState({
    appName: "",
    appLanguage: [],
  });

  const [checked, setChecked] = useState([]);
  const [errorList, setErrorList] = useState([]);

  const dispatch = useDispatch();

  const setAppName = (e) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appName: e.target.value,
    }));
  };
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    if (isValidData()) {
      saveData();
    } else {
      console.log("show error");
    }
  };

  const isValidData = () => {
    var errors = [...errorList];
    if (!application.appName) {
      errors = [...errorList, "Please Enter Application Name"];
      setErrorList(errors);
      return false;
    }
    return true;
  };
  console.log(errorList);
  const saveData = () => {
    const newItem = {
      id: Date.now(),
      appName: application.appName,
      languageList: checked,
    };

    setApplication({
      appName: "",
      //appLanguage: [],
    });
    //setChecked([]);
    dispatch(add_application(newItem));
  };
  // console.log("updated list", list);
  return (
    <div className="applicationFormContainer">
      <form className="applicationForm" onSubmit={handelSubmit}>
        <InputField
          labelText="Application Name"
          isMandatory={true}
          inputType="text"
          fieldName="appName"
          placeholder="Enter Application Name"
          value={application.appName}
          onChange={setAppName}
        />
        <label className="label-text">
          Select Language
          <span className="text-danger"> *</span>
        </label>
        {languages.map((language, index) => {
          return (
            <div className="form-check" key={language.id}>
              <input
                className="form-check-input"
                type="checkbox"
                name="language"
                id={language.id}
                value={language.id}
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                {language.name}
              </label>
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
