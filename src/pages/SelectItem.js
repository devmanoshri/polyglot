import React, { useState } from "react";

const colors = [
  { value: "red", text: "Red" },
  { value: "yellow", text: "Yellow" },
  { value: "blue", text: "Blue" },
  { value: "black", text: "Black" },
  { value: "green", text: "Green" },
];

function SelectItem() {
  const [color, setColor] = useState("red");
  const handleChange = (e) => setColor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      color: color,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Choose your favorite color:
            <select value={color} onChange={handleChange}>
              {colors.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SelectItem;
