import React from "react";
import "./FormsControls.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <>
      <textarea
        {...input}
        {...props}
        className={
          "element-control__element " +
          (hasError ? "error" : "") +
          props.className
        }
      ></textarea>
      <br />
      {hasError && (
        <span className="element-control__error-message">{meta.error}</span>
      )}
    </>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <>
      <input
        {...input}
        {...props}
        className={
          "element-control__element " +
          (hasError ? "error" : "") +
          props.className
        }
      ></input>
      <br />
      {hasError && (
        <span className="element-control__error-message">{meta.error}</span>
      )}
    </>
  );
};
