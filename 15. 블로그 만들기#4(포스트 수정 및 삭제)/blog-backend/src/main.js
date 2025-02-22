require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import serve from "koa-static";
import path from "path";
import send from "koa-send";

import api from "./api";
import jwtMiddleware from "./lib/jwtMiddleware";
// import createFakeData from "./createFakeData";

// 비구조화 할당을 통해 process.env내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;
mongoose.Promise = global.Promise; // Node의 네이티브 Promise사용

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
    // createFakeData();
  })
  .catch((e) => {
    console.log(e);
  });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use("/api", api.routes()); // api 라우터 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, "../../blog-frontend/build");
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  // NOT Found이고, 주소가 /api로 시작하지 않는경우
  if (ctx.status === 404 && ctx.path.indexOf("/api") !== 0) {
    // index.html 내용을 반환
    await send(ctx, "index.html", { root: buildDirectory });
  }
});

// PORT가 정해지지 않았다면 기본으로 4000사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listening to port " + port);
});
