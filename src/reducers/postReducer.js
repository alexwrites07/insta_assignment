// src/reducers/postReducer.js
import {
  FETCH_POSTS_SUCCESS,
  ADD_COMMENT,
  CREATE_POST
} from "../actions/postActions";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Beautiful Sunset",
      imageUrl: "https://via.placeholder.com/400",
      comments: [
        { username: "user1", text: "Amazing!" },
        { username: "user2", text: "Love it!" }
      ]
    },
    {
      id: 2,
      title: "Nature Walk",
      imageUrl: "https://via.placeholder.com/400",
      comments: [
        { username: "user3", text: "Great view!" },
        { username: "user1", text: "Awesome!" }
      ]
    }
    // Add more sample posts as needed
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.map((post) => ({ ...post, comments: [] }))
      };
    case ADD_COMMENT:
      const { postId, comment } = action.payload;
      const updatedPosts = state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      );
      return { ...state, posts: updatedPosts };
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { ...action.payload, id: state.posts.length + 1, comments: [] }
        ]
      };
    default:
      return state;
  }
};

export default postReducer;
