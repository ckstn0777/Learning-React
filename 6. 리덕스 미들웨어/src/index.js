import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import myLogger from './middlewares/MyLogger';
import { composeWithDevTools } from 'redux-devtools-extension';

// 스토어에 미들웨어를 적용 할 때에는 applyMiddleware 라는 함수를 사용합니다.
// Redux DevTools 를 미들웨어와 함께 사용해야 한다면 composeWithDevTools를 사용합니다.
// applyMiddleware안에 redux-logger와 우리가 직접만든 myLogger를 같이 사용할 수 있습니다.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger)),
); // 스토어를 만듭니다.

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
