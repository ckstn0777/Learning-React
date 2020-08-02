import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, clearPost } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));

    // 포스트 페이지에서 떠날때마다 포스트를 비우게 되므로 다른 포스트를 읽을 때 이전 포스트가 보여지는 문제가 해결되버립니다.
    // 이 방법은 충분히 편하고, 쉽기도 하지만, 한가지 아쉬운점이 있습니다.
    // 바로, 이미 읽었던 포스트를 불러오려고 할 경우에도 새로 요청을 한다는 것이죠.
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
