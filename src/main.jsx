import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// function Update() {
//   return (
//     <>
//       <h1>Time</h1>
//       <input type="text" />
//       <p>time: {new Date().toLocaleTimeString()}</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// setInterval(() => root.render(<Update />), 1000);
