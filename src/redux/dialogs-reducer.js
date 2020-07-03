import { dialogsAPI } from "../api/api";

const SET_DIALOGS_DATA = "dialogs/SET-DIALOGS-DATA";
const SET_MESSAGES_DATA = "dialogs/SET-MESSAGES-DATA";
const ADD_MESSAGE_TO_MESSAGES_DATA = "dialogs/ADD-MESSAGE-TO-MESSAGES-DATA";

const initialState = {
  messagesData: [],
  dialogsData: [],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS_DATA:
      return {
        ...state,
        dialogsData: action.data,
      };
    case SET_MESSAGES_DATA:
      return {
        ...state,
        messagesData: action.data,
      };
    case ADD_MESSAGE_TO_MESSAGES_DATA:
      return {
        ...state,
        messagesData: [...state.messagesData, action.message],
      };
    default:
      return state;
  }
};

// Actions

export const setDialogsData = (data) => ({
  type: SET_DIALOGS_DATA,
  data,
});

export const setMessagesData = (data) => ({
  type: SET_MESSAGES_DATA,
  data,
});

export const addMessageToMessagesData = (message) => ({
  type: ADD_MESSAGE_TO_MESSAGES_DATA,
  message,
});

//Thunks

export const getDialogs = () => async (dispatch) => {
  const data = await dialogsAPI.getDialogs();
  dispatch(setDialogsData(data));
};

export const getDialogMessages = (userId) => async (dispatch) => {
  const data = await dialogsAPI.getDialogMessages(userId);
  dispatch(setMessagesData(data.items));
};

export const sendMessage = (userId, messageBody) => async (dispatch) => {
  const data = await dialogsAPI.sendMessage(userId, messageBody);
  if (!data.resultCode) {
    dispatch(addMessageToMessagesData(data.data.message));
  }
};

export default dialogsReducer;
