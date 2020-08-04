import Post from "../../models/post";
import mongoose from "mongoose";
import Joi from "@hapi/joi";

const { ObjectId } = mongoose.Types;

// 올바른 아이디인지 검증하는 미들웨어
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }

  return next();
};

/* 포스트 작성
POST /api/posts
{ title, body }
*/
export const write = async (ctx) => {
  // 먼저, 검증 할 스키마를 준비해야합니다.
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()),
  });

  // 그 다음엔, validate 를 통하여 검증을 합니다.
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({ title, body, tags });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 목록 조회
GET /api/posts
*/
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해야함
  // 값이 주어지지 않으면 1을 기본으로 수행
  const page = parseInt(ctx.query.page || "1", 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    // sort _id 1로 설정하면 오름차순, -1로 설정하면 내림차순(가장최근작성순)
    // limit 함수로 개수 제한
    // lean 함수는 Json형태로 조회
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    // 마지막 페이지 번호를 찾아서 HTTP Header에 추가해서 보내줌
    const postCount = await Post.countDocuments().exec();
    ctx.set("Last-Page", Math.ceil(postCount / 10));

    // 200자 이상이라면 slice로 해서 제외시켜줌
    ctx.body = posts.map((post) => ({
      ...post,
      body:
        post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();

    // 포스트가 없으면 오류 반환
    if (!post) {
      ctx.status = 404;
      ctx.body = {
        message: "포스트가 존재하지 않습니다",
      };
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = async (ctx) => {
  const { id } = ctx.params;

  // 없을수도 있으니까 require()는 제거한다
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 그 다음엔, validate 를 통하여 검증을 합니다.
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환함
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
