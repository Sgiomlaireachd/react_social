const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  messagesData: [
    {
      message: "Hello!",
    },
    {
      message: "This!",
    },
    {
      message: "Is!",
    },
    {
      message: "Test!",
    },
  ],
  dialogsData: [
    {
      id: 1,
      name: "Mike",
    },
    {
      id: 2,
      name: "Rick",
    },
    {
      id: 3,
      name: "Tyson",
    },
    {
      id: 4,
      name: "Boogaloooo",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [...state.messagesData, { message: action.message }],
      };
    }
    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = (newText) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: newText,
  };
};

export const addMessageActionCreator = (message) => {
  return {
    type: "ADD-MESSAGE",
    message,
  };
};

export default dialogsReducer;
