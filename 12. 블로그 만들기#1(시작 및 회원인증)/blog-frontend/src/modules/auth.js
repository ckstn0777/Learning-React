import { createAction, handleActions } from 'redux-actions'; // redux를 더 편하게 사용하기(p.457 참고)

// 액션 객체
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

// 액션 생성함수
export const sampleAction = createAction(SAMPLE_ACTION);

// 초기상태
const initialState = {};

// 리듀서
const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
