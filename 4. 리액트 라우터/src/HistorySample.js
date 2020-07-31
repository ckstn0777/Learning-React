import React, { useEffect } from 'react';

// 이렇게 history 객체를 사용하면 조건부로 다른 곳으로 이동도 가능하고,
// 이탈을 메시지박스를 통하여 막을 수 도 있습니다.
function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');

    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
