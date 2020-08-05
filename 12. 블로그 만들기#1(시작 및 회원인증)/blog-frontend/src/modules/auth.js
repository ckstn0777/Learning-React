import { createAction, handleActions } from 'redux-actions'; // redux를 더 편하게 사용하기(p.457 참고)
import produce from 'immer';

// 액션 객체
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 액션 생성함수
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
// export const changeField = ({form, key, value}) => ({type: CHANGE_FIELD, {form, key, value}}) // createAction 안썼을경우

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login
// export const initializeForm = (form) => ({type: CHANGE_FIELD, form}) // createAction 안썼을경우

// 초기상태
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

// 리듀서
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(
        state,
        (draft) => {
          draft[form][key] = value;
        }, // 예: state.register.username을 바꾼다
      ),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
