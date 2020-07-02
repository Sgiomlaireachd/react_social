import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} placeholder={"Login"} name={"login"} />
      </div>
      <div>
        <Field
          component={"input"}
          placeholder={"Password"}
          type={"password"}
          name={"password"}
        />
      </div>
      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
        Remember Me
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submitForm} />
    </div>
  );
};

export default Login;
