import React, { useState } from "react";
import InputField from "../../form-elements/InputField";
import Checkbox from "../../form-elements/Checkbox";
import handelSubmit from "./ApplicationFormSubmit";
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
    appLanguage: {},
  });
  const setAppName = (e) => {
    setApplication((existingValue) => ({
      ...existingValue,
      appName: e.target.value,
    }));
  };
  //   var setLanguages = (e) => {
  //     setApplication(Array.isArray(e) ? e.map((x) => x.value) : []);
  //       };
  return (
    <div className="applicationFormContainer">
      <form className="applicationForm" onSubmit={handelSubmit}>
        <InputField
          labelText="Application Name"
          isMandatory={true}
          inputType="text"
          fieldName="appName"
          placeholder="Enter Application Name"
          // value={application.appName}
          onChange={setAppName}
        />
        <label className="label-text">
          Select Language
          <span className="text-danger"> *</span>
        </label>
        {languages.map((language, index) => {
          return (
            <Checkbox
              key={index}
              name="language"
              id={language.id}
              value={language.id}
              labelText={language.name}
            />
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
