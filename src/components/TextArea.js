import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let words = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") words++;
  }
  if (!(text.length === 0)) words++;

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClrtxt = () => {
    setText("");
    props.showAlert("Text is Cleared", "success");
  };

  const handleAltrcase = () => {
    let txt = text;
    let newtxt = "";
    for (let i = 0; i < txt.length; i++) {
      if (i % 2 === 0 && text[i] >= "a" && text[i] <= "z") {
        newtxt += String.fromCharCode(txt[i].charCodeAt() - 32);
      } else {
        newtxt += text[i];
      }
    }
    setText(newtxt);
    props.showAlert("Converted to AlternateCase", "success");
  };

  let style1 = {};
  let style2 = {};
  if (props.mode === "light") {
    style1 = {
      color: "black",
    };
    style2 = {
      backgroundColor: "white",
      color: "black",
    };
  } else {
    style1 = {
      color: "white",
    };
    style2 = {
      backgroundColor: "#201f22",
      color: "white",
    };
  }

  return (
    <>
      <div className="container">
        <h1 style={style1}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={style2}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3" onClick={handleClrtxt}>
            Clear text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handleAltrcase}
          >
            Alternate case
          </button>
        </div>
      </div>
      <div className="container" style={style1}>
        <h2>Your Text Summary</h2>
        <p>
          {words} words, {text.length} characters
        </p>
        <p>{0.008 * words} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}

TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
};
