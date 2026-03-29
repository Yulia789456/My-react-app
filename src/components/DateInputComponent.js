// import react as we use react in this file
import React from "react";

// component function
// these are props ({ newDate = "", onDateChange }) = inputs to the component, Data passed into the component from outside
function DateInputComponent({ newDate = "", onDateChange }) {
  // styling object
  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  // we already have it in props, probably do not need here, it overwrites the prop
  var newDate = "";

  // function
  // When user selects a date event.target.value = selected date; calls onDateChange.
  // onDateChange is a function fassed from the parent component, this component is saying user picked a new date
  const handleChange = (event) => {
    // get the event target and extract the value
    // debugger;
    onDateChange(event.target.value);
  };

  // this renders a date input
  return (
    <input
      className="input"
      type="date"
      style={inputStyle}
      onChange={handleChange}
    />
  );
}

// this allows other files to use this component
export default DateInputComponent;
