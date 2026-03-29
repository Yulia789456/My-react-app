// App.js in the main brain of the app
// the main container that controlls everything
// it hold data (states)
// it passes data to components
// it conects everything together

// useState is a react tool to store data tha can change
import React, { useState } from "react";
// importing my custom component
import DateInputComponent from "./components/DateInputComponent";

// the App function is the main component
// everything inside it = my app UI
function App() {
  // state
  // date = current value
  // setDate = function to update it
  // its like date = ""
  // but react keeps track of it and updates the screen automatically
  // example setDate("2026-03-29"); react updates date, UI re-renders automatically
  const [date, setDate] = useState("");

  // this is what gets displayed
  // 1. newDate={date} Passing the state DOWN to the component
  // so inside DateInputComponent newDate === date
  // 2. onDateChange={setDate} Passing the function DOWN
  // so inside child onDateChange(value) actually calls setDate(value)
  return (
    <>
      <DateInputComponent newDate={date} onDateChange={setDate} />
    </>
  );
}

// make this App component avaliable
export default App;
