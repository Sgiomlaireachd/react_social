import React from "react";
import { reduxForm, Field, reset } from "redux-form";

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          placeholder={"New message"}
          name={"message"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("newMessage"));

const NewMessageReduxForm = reduxForm({
  form: "newMessage",
  onSubmitSuccess: afterSubmit,
})(NewMessageForm);

export default NewMessageReduxForm;