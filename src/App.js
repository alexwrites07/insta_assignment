// src/App.js
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { auth } from './firebase'; // Import your authentication module

import LoginForm from './components/LoginForm';
import PostList from './components/PostList';
const handleLogout = () => {
  dispatch(signOut());
};
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  return (
    <Provider store={store}>
      <div>
        {user ? (
          <div>
            {/* Render your main content here */}
            <h1>Welcome, {user.email}!</h1>
            <PostList />
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </Provider>
  );
};

export default App;
