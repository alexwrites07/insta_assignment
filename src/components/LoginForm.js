// src/components/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signIn, signOut } from "../actions/userActions";
import "./LoginForm.css"; // Import the stylesheet

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        await auth.createUserWithEmailAndPassword(email, password);
        dispatch(signIn(email));
      } else {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch(signIn(email));
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-form-container">
      {user ? (
        <div className="welcome-container">
          <h1>Welcome, {user}!</h1>
          <button onClick={() => auth.signOut()}>Logout</button>
          {/* Your other components go here */}
          {/* For example: <PostList /> */}
        </div>
      ) : (
        <div className="form-container">
          {error && <p className="error-message">{error}</p>}
          <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          </form>
          <p onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
