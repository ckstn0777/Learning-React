import React, { useState } from 'react';
import loadable from '@loadable/component';

// 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해줍니다.
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});

const onMouseOver = () => {
  SplitMe.preload();
};

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <>
      <p onMouseOver={onMouseOver}>
        마우스를 올리면 컴포넌트를 미리 불러올 수 있습니다^^
      </p>
      <button onClick={onClick}>Split Me 보이기</button>
      {/* loadable을 쓰면 Suspeanse를 사용할 필요는 없습니다*/}
      {visible && <SplitMe />}
    </>
  );
}

export default App;
