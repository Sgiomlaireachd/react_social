import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let DialogsContainer = withAuthRedirect(Dialogs);

export default DialogsContainer;
