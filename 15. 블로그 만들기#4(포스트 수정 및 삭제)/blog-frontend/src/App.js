import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      {/* 배열을 사용하면 한 라우트 컴포넌트에 여러개의 경로를 쉽게 설정할 수 있음
      /@:username => http://localhost:3000/@velopert 같은 경로에서 velopert를 username 파라미터로 읽을 수 있음
      Medium, 브런치 같은 서비스에서도 이렇게 사용함 */}
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
}

export default App;
