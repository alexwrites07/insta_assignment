// src/components/PostList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsSuccess } from "../actions/postActions";
import PostItem from "./PostItem";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    // Dispatch dummy data
    dispatch(
      fetchPostsSuccess([
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
      ])
    );
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
