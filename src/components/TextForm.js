import React, { useState } from "react"; // Here useState is the hook

function TextForm(props) {
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; this is wrong way to change the value of any variable
  // setText("new text") this is right way to change the value of any variable

  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert Text to UpperCase
      </button>
      <button className="btn btn-primary m-3" onClick={handleLowerClick}>
        Convert Text to LowerCase
      </button>
    </div>
  );
}

export default TextForm;
