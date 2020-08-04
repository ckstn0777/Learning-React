let postId = 1;

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용",
  },
];

/* 포스트 작성
POST /api/posts
{ title, body }
*/
export const write = (ctx) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  const { title, body } = ctx.request.body;
  postId += 1; // 기존 postId 값에 1을 더함
  const post = { id: postId, title, body };
  posts.push(post);

  ctx.body = post;
};

/* 포스트 목록 조회
GET /api/posts
*/
export const list = (ctx) => {
  ctx.body = posts;
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = (ctx) => {
  const { id } = ctx.params;

  const post = posts.find((post) => post.id.toString() === id);

  // 포스트가 없으면 오류 반환
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다",
    };
    return;
  }

  ctx.body = post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  // 포스트가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다",
    };
    return;
  }

  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
export const replace = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  // 포스트가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다",
    };
    return;
  }

  // 기존에 있던거에서 그냥 덮어씌워버림
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  // 포스트가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다",
    };
    return;
  }

  // 기존 값에 정보를 덮어 씌웁니다
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
