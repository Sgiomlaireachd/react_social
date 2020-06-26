import DialogItems from "./DialogItems";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  };
};

const DialogItemsContainer = connect(mapStateToProps)(DialogItems);

export default DialogItemsContainer;
