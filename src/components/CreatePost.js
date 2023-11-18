// src/components/CreatePost.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/postActions";

const CreatePost = () => {
  const [newPost, setNewPost] = useState({ title: "", imageUrl: "" });
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    if (!user) {
      // Handle user not logged in (you can show a modal or redirect to login page)
      alert("Please sign in to post!");
      return;
    }

    dispatch(createPost({ ...newPost, username: user }));
    setNewPost({ title: "", imageUrl: "" });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <label>Image URL:</label>
      <input
        type="text"
        value={newPost.imageUrl}
        onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
