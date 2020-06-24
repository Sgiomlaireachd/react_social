const store = {
  _state: {
    profilePage: {
      postsData: [
        {
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

  _addPost() {
    const newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      pubDate: "11.05.2021",
      likesCount: 0,
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._subscriber();
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._subscriber();
  },

  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._subscriber();
  },

  _addMessage() {
    this._state.dialogsPage.messagesData.push({
      message: this._state.dialogsPage.newMessageText,
    });
    this._state.dialogsPage.newMessageText = "";
    this._subscriber();
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._updateNewMessageText(action.newText);
    } else if (action.type === "ADD-MESSAGE") {
      this._addMessage();
    }
  },
};

export default store;
