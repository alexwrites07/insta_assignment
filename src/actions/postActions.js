// src/actions/postActions.js
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const ADD_COMMENT = "ADD_COMMENT";
export const CREATE_POST = "CREATE_POST";

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
});

export const createPost = (newPost) => ({
  type: CREATE_POST,
  payload: newPost
});
