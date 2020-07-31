import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      {/* render : JSX 자체를 렌더링 */}
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
