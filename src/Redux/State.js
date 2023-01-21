
let rerenderEntireTree = () => {
  console.log('Sate changed');
};


let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 16 },
      { id: 2, message: "It's my first post", likeCount: 220 },
      { id: 3, message: "It's my first post", likeCount: 220 },
      { id: 4, message: "It's my first post", likeCount: 220 },
      { id: 5, message: "It's my first post", likeCount: 220 },
    ],

    newPostText: "it-Kamasutra.com",
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Valera' },
      { id: 2, name: 'Dima' },
      { id: 3, name: 'Sweta' },
      { id: 4, name: 'Vlad' },
      { id: 5, name: 'Igor' },
    ],
    messages: [
      { id: 1, message: "HI" },
      { id: 2, message: "How is your it-kamasutra?" },
      { id: 3, message: "Somthing else" },
      { id: 4, message: "yo" },
      { id: 5, message: "more text" },
    ],
  },
}


export const addPost = () => {

  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;