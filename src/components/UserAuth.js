// src/components/UserAuth.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../actions/userActions";

const UserAuth = () => {
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn(username));
  };

  const handleSignUp = () => {
    dispatch(signUp(username));
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user}!</p>
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </>
      )}
    </div>
  );
};

export default UserAuth;
