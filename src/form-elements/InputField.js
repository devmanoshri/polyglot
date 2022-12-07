import React from "react";

function InputField({
  labelText,
  isMandatory,
  inputType,
  fieldName,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={fieldName}>
        {labelText}
        {isMandatory && <span className="text-danger"> *</span>}
      </label>

      <input
        type={inputType}
        className="form-control"
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
