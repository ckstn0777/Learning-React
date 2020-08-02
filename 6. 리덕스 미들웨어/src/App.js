// App.js
import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
