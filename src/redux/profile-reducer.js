const ADD_POST = "ADD-POST";
const NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];

      const newPost = {
        id: 4,
        message: state.newPostText,
        pubDate: "11.05.2021",
        likesCount: 0,
      };

      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText,
  };
};

export default profileReducer;
