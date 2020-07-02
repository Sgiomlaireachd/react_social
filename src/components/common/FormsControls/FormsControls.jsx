import React from "react";
import "./FormsControls.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className="element-control">
      <textarea
        {...input}
        {...props}
        classNAme={"element-control__element" + (hasError ? " error" : "")}
      ></textarea>
      <br />
      {hasError && (
        <span className="element-control__error-message">{meta.error}</span>
      )}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className="element-control">
      <input
        {...input}
        {...props}
        classNAme={"element-control__element" + (hasError ? " error" : "")}
      ></input>
      <br />
      {hasError && (
        <span className="element-control__error-message">{meta.error}</span>
      )}
    </div>
  );
};
