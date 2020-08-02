// containers/PostListContainer.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';
import PostList from '../components/PostList';

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시(가장 처음에만)
  // 이후에는 호출하기는 하는데, 이전데이터가 있으니까 로딩중 표시는 안나옴.
  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
