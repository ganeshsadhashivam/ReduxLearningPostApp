const { createStore, combineReducers } = require("redux");

//initial state

const initialState = {
  posts: [],
};

//users
const userInitialState = {
  users: [],
};

//Actions

//action types

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";

//add post

const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

//Remove post

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};

//ADD USER
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

//reducer

const postReducer = (state = initialState, action) => {
  //using switch statement
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };

    default:
      return state;
  }

  //   if (action.type === "ADD_POST") {
  //     return {
  //       posts: [...state.posts, action.payload],
  //     };
  //   } else if (action.type === "REMOVE_POST") {
  //     return {
  //       posts: state.posts.filter((post) => {
  //         return post.id !== action.id;
  //       }),
  //     };
  //   } else {
  //     return state;
  //   }
};

const userReducer = (state = userInitialState, action) => {
  //using switch statement
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

//root reducer
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

//store

const store = createStore(rootReducer);

//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log("posts", data.posts);
  console.log("users", data.users);
});

//dispatch
store.dispatch(
  addPostAction({
    id: 1,
    title: "Best Course",
  })
);

store.dispatch(
  addPostAction({
    id: 2,
    title: "how to master Redux",
  })
);

//remove post
store.dispatch(removePostAction(1));

//add new user
store.dispatch(
  addUserAction({ name: "ganesh", email: "ganeshsadhashivam@outlook.com" })
);
