import React, { useState } from "react";
import Select from "react-select";
// Go for -  npm install react-select

const languages = [
  { value: "0", label: "-- Language --" },
  { value: "1", label: "English" },
  { value: "2", label: "Norwegian" },
  { value: "3", label: "Germany" },
  { value: "10", label: "French" },
  { value: "12", label: "Bengali" },
];
function MultipleSelectItems() {
  const [selectedOption, setSelectedOption] = useState([]);
  var multiSelectHandel = (e) => {
    setSelectedOption(Array.isArray(e) ? e.map((x) => x.value + ",") : []);
  };
  return (
    <div>
      <Select onChange={multiSelectHandel} options={languages} isMulti />
      <h3>selected value:{selectedOption}</h3>
    </div>
  );
}

export default MultipleSelectItems;
