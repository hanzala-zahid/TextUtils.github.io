import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#1f1b24",
        }}
      >
        <div className="heading my-3">
          <h1>{props.heading}</h1>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#212121" : "white",
              color: props.mode === "dark" ? "white" : "#1f1b24",
            }}
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#1f1b24",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b> {text.split(" ").length}</b> words and <b>{text.length} </b>
          characters
          <p>
            <b> {text.split(0.008 * text.split(" ").length).length}</b> Minutes
            to read
          </p>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the Text Box above to Preview it here!"}
        </p>
      </div>
    </>
  );
}
