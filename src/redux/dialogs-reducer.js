const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { message: action.message }],
      };
    default:
      return state;
  }
};

// Actions

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export default dialogsReducer;
