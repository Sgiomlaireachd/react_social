const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            state.messagesData.push({
                message: state.newMessageText,
              });
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return { type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText };
};

export const addMessageActionCreator = () => {
return { type: "ADD-MESSAGE" };
};

export default dialogsReducer;