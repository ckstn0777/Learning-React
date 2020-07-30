import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
}

function User({ id }) {
  // () => getUser(id) 한 이유는 callback()할때 getUser(id)가 실행되도록 한거임. 그냥 getUser(id)라고 하면 실행못함.
  // id가 바뀔때 마다 리렌더링 되어서 업데이트 되도록 해줌
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
