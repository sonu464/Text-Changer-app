import React, { useState } from "react"; // Here useState is the hook
import styles from "./TextForm.module.css";

function TextForm(props) {
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // Copy text to clipboard -------------------------
  const handleCopyClick = () => {
    let box = document.getElementById("mybox");
    box.select();
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; this is wrong way to change the value of any variable
  // setText("new text") this is right way to change the value of any variable

  return (
    <>
      <div className="container">
        <div className="m-3">
          <h2>{props.heading}</h2>
          <textarea
            value={text}
            className="form-control"
            id="mybox"
            rows="8"
            placeholder="Enter text here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`${"btn btn-primary mx-1"} ${styles.button}`}
          onClick={handleUpClick}
        >
          Convert Text to UpperCase
        </button>
        <button
          className={`${"btn btn-primary mx-1"} ${styles.button}`}
          onClick={handleLowerClick}
        >
          Convert Text to LowerCase
        </button>
        <button
          className={`${"btn btn-primary mx-1"} ${styles.button}`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className={`${"btn btn-primary mx-1"} ${styles.button}`}
          onClick={handleCopyClick}
        >
          Copy
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.trim().split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.trim().split(" ").length} Minutes</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
