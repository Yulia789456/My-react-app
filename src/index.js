// index.js is the entry point where the app starts running
// it connects App.js to HTML page

// lets me use react features (JSX, components)
import React from "react";
// this is what actually renders react into the browser
import { createRoot } from "react-dom/client";
// import the App.js
import App from "./App.js";

// const App = () => <h1>Hello, React!</h1>;

// find the HTML element
// this like looks for this in my html <div id="root"></div>
// That empty div is where my entire React app will go
const root = createRoot(document.getElementById("root"));

// render my app
// this tells react: Take the App component and display it inside the root div
root.render(<App />);
