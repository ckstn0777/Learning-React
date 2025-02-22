import React from 'react';
import WithRouterSample from './WithRouterSample';

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공',
  },
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      {/* location과는 다르게 match 를 쓸때는 주의!! Profiles에서 쓰면 match를 제대로 받아오지 못함*/}
      <WithRouterSample />
    </div>
  );
};

export default Profile;
