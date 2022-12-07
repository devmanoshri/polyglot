import React from "react";

function Checkbox({ value, name, id, labelText, ifChecked }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        name={name}

        //{ifChecked === 1 ? "checked" : null}
        // {checked && "checked"}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {labelText}
      </label>
    </div>
  );
}

export default Checkbox;
