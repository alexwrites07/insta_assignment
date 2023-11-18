// src/components/PostItem.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../actions/postActions";
import { signOut } from "../actions/userActions";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const [newComment, setNewComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddComment = () => {
    if (!user) {
      alert("Please sign in to add a comment!");
      return;
    }

    const updatedComments = [
      ...userComments,
      { username: user, text: newComment }
    ];
    setUserComments(updatedComments);

    dispatch(addComment(post.id, { username: user, text: newComment }));

    setNewComment("");
  };

  const handleShare = () => {
    console.log(`Shared post with ID ${post.id}`);
  };

  const handleSave = () => {
    console.log(`Saved post with ID ${post.id}`);
    const blob = new Blob([JSON.stringify(post)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `post_${post.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <div className="post-item">
      <img src={post.imageUrl} alt={post.title} />
      <div className="post-content">
        <p>{post.title}</p>
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index}>{`${comment.username}: ${comment.text}`}</li>
          ))}
        </ul>
        {user && (
          <div>
            <h3>Your Comments:</h3>
            <ul>
              {userComments.map((comment, index) => (
                <li key={index}>{`${comment.username}: ${comment.text}`}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        )}

        <div className="action-buttons">
          <button onClick={handleShare}>Share</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
