import React, { useState, Suspense } from 'react';

// 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해줍니다.
const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <>
      <button onClick={onClick}>Split Me 보이기</button>
      {/* 코드 스플리팅 된 컴포넌트를 로딩하도록 발동시킬 수 있고, 로딩 중일때는 보여줄 UI 를 설정할 수도 있습니다 */}
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>
    </>
  );
}

export default App;
