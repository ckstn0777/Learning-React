// App.js
import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      {/* 이는 /about 경로가 / 규칙과도 일치하기 때문에 발생한 현상인데요 
      이를 고치기 위해선 Home 을 위한 라우트에 exact 라는 props 를 true 로 설정하시면 됩니다.*/}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;
