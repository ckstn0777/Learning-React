// App.js
import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <PostListContainer />
    </div>
  );
}

export default App;
