const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    messagesData: [{
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
    dialogsData: [{
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
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
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    };
};

export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    };
};

export default dialogsReducer;