import React from "react";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

export default function Alert(props) {
  const capitalize = (word) => {
    const string = word.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
