import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

export default function AboutUs(props) {
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
  } else if (props.mode === "dark") {
    style1 = {
      color: "white",
    };
    style2 = {
      backgroundColor: "#201f22",
      color: "white",
    };
  } else if (props.mode === "purple") {
    style1 = {
      color: "white",
    };
    style2 = {
      backgroundColor: "#494D5F",
      color: "white",
    };
  }
  return (
    <div className="container">
      <h1 className="my-3" style={style1}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={style2}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={style2}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style2}>
              Textutils gives you a way to analyze your text quickly and
              efficiently.Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={style2}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style2}>
              TextUtils is free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={style2}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={style2}>
              This word counter software works in any web browsers such as
              chrome, Firefox, Safari, Opera, Brave. It suits to count
              characters in facebook, blog, books, excel document, pdf documnet,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
