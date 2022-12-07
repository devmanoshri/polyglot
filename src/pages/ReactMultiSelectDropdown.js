import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
//https://reactjsexample.com/react-multiselect-dropdown-with-search-and-various-options/

const options = [
  { name: "Srigar", id: 1 },
  { name: "Sam2", id: 2 },
  { name: "Sam3", id: 3 },
  { name: "Sam4", id: 4 },
  { name: "Sam5", id: 5 },
];

const selectedValues = [
  { name: "1Srigar1", id: 1 },
  { name: "1Sam2", id: 2 },
  { name: "1Sam3", id: 3 },
  { name: "1Sam4", id: 4 },
  { name: "1Sam5", id: 5 },
];
function ReactMultiSelectDropdown() {
  const [selected, setSelected] = useState([]);
  const onRemove = (data) => {
    console.log("onRemove", data);
  };
  const onSelect = (data) => {
    console.log("onSelect", data);
  };
  return (
    <div>
      <Multiselect
        closeIcon="close"
        placeholder="Choose your selection"
        showCheckbox
        //singleSelect  //behave like a normal dropdown

        options={options} // Options to display in the dropdown
        //selectedValues={selectedValue} // Preselected value to persist in dropdown
        selectedValues={selectedValues} //Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    </div>
  );
}

export default ReactMultiSelectDropdown;
