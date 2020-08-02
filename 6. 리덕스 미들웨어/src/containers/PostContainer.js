import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome } from '../modules/posts';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    // 초기에 state.posts.post[postId]가 존재하지 않아도 reducerUtils.initial()를 통해 비구조할당을 할것이기
    // 때문에 에러가 나지 않을거에요
    (state) => state.posts.post[postId] || reducerUtils.initial(),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
}
export default PostContainer;
