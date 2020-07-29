// App.js
import React, { useRef } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'ckstn',
      email: 'ckstn@naver.com',
    },
    {
      id: 3,
      username: 'tester',
      email: 'testert@daum.net',
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
