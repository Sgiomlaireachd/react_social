import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const store = {
  _state: {
    profilePage: {
      postsData: [{
          id: 1,
          message: "this is My first post!",
          pubDate: "11.05.2000",
          likesCount: 999,
        },
        {
          id: 2,
          message: "this is mnabdjkabdt!",
          pubDate: "11.08.2020",
          likesCount: 3,
        },
        {
          id: 3,
          message: "this is My first post!",
          pubDate: "22.06.2020",
          likesCount: 1,
        },
      ],
      newPostText: "",
    },

    dialogsPage: {
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
    },
  },

  _subscriber: () => {
    console.log("no subscriber!");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._subscriber();
  },
};

export default store;