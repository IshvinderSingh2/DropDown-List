import "./styles.css";
import { IndiaStates } from "./IndiaStates";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("Choose State to Print State");

  return (
    <>
      <div className="App">
        <IndiaStates
          selectedState="click to dropdown"
          onChange={(selected) => {
            console.log(selected);
            // console.log(typeof selected);
            setText("You Choose " + selected);
          }}
        />
        <br />
        <h4 id="downTxt">{text}</h4>
      </div>
    </>
  );
}
