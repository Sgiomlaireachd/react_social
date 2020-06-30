import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUser } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

const HeaderLoginContainer = connect(mapStateToProps, { setUser })(
  HeaderContainer
);

export default HeaderLoginContainer;
