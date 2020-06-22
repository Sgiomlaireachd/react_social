import { rerenderEntireTree } from "../render";

const state = {
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
  },
};

export const addPost = () => {
  const newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    pubDate: "11.05.2021",
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state, this);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state, this);
};

export default state;
