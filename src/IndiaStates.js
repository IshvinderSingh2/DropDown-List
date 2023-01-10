import React, { useState } from "react";

export const IndiaStates = (props) => {
  const states = [
    "tamil nadu",
    "kerala",
    "J&K",
    "Punjab",
    "Maharashtra",
    "Gujarat"
    // Add other states here
  ];
  const [selectedState, setSelectedState] = useState("");
  const handleSelect = (event) => {
    setSelectedState(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <>
      <div>
        <h1>DropDown Event</h1>
        <label className="mt-5 " htmlFor="states">
          <h3>Select a state:</h3>
        </label>
        <br />
        <select
          id="states"
          className="btn btn-secondary dropdown-toggle"
          onChange={handleSelect}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
