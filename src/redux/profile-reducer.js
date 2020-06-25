const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                pubDate: "11.05.2021",
                likesCount: 0,
              };
          
              state.postsData.push(newPost);
              state.newPostText = "";
              return state;
        case NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: "ADD-POST" };
};

export const updateNewPostTextActionCreator = (newText) => {
return { type: "UPDATE-NEW-POST-TEXT", newText: newText };
};

export default profileReducer;