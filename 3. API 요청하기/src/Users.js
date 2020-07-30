import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  // API를 요청하게 될때는 3가지 종류의 상태를 관리해야 하는데요.
  // 1) 요청의 결과 2) 로딩 상태 3) 에러 입니다.
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 초기화 및 요청 start
      setUsers(null);
      setError(null);
      setLoading(true);

      // 호출
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/',
      );

      setUsers(response.data); // 저장
    } catch (e) {
      setError(e);
    }

    setLoading(false); // 요청 종료
  };

  // 처음 한번은 실행
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
