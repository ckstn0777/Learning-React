import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import myLogger from './middlewares/MyLogger';

// 스토어에 미들웨어를 적용 할 때에는 applyMiddleware 라는 함수를 사용합니다.
const store = createStore(rootReducer, applyMiddleware(myLogger)); // 스토어를 만듭니다.

// Provider로 store를 넣어서 App 을 감싸게 되면
// 우리가 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 된답니다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
