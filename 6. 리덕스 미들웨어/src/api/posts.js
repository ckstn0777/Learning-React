// api/posts.js
import axios from 'axios';

// 비동기 함수 작성
export const getPosts = async () => {
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
