import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  // 예 api/posts?username=tester&page=2...
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts/${queryString}`);
};
