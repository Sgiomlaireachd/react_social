import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={props.className}>
      <Field
        className={props.fieldClass}
        component={Textarea}
        placeholder={"New message"}
        name={"message"}
      />
      <button className={props.buttonClass}>Send</button>
    </form>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("newMessage"));

const NewMessageReduxForm = reduxForm({
  form: "newMessage",
  onSubmitSuccess: afterSubmit,
})(NewMessageForm);

export default NewMessageReduxForm;
