import React from "react";

function Checkbox({ value, name, id, labelText, ifChecked, onChangeHandel }) {
  return (
    <div className="form-check">
      <input
        onChange={onChangeHandel}
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
        {onChangeHandel}
      </label>
    </div>
  );
}

export default Checkbox;
