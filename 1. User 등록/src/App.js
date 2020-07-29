// App.js
import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUser(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter((user) => user.active).length;
}

// 초기상태
const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'ckstn',
      email: 'ckstn@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'tester',
      email: 'testert@daum.net',
      active: false,
    },
  ]
}

// 리듀서 함수
function reducer(state, action) {
	return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const {username, email} = state.inputs;

  // 작성예정
  const onChange;
  const onCreate;
  const onRemove;
  const onToggle;

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
