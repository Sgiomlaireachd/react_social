import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../components/common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          placeholder={"Email"}
          type={"email"}
          name={"email"}
          validate={required}
        />
      </div>
      <div>
        <Field
          component={Input}
          placeholder={"Password"}
          type={"password"}
          name={"password"}
          validate={required}
        />
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={"rememberMe"} />
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
    const { email, password, rememberMe } = formData;
    props.loginUser(email, password, rememberMe);
  };

  if (props.isLoggedIn) return <Redirect to={"/profile"} />;
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submitForm} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { loginUser })(Login);
