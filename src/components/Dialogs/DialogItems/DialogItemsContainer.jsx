import DialogItems from "./DialogItems";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  };
};

export default compose(connect(mapStateToProps), withRouter)(DialogItems);
