const Koa = require("koa");

const app = new Koa();

// 하나의 미들웨어임
// ctx는 Context 줄임말로 웹 요청과 응답에 관한 정보를 지님
// next는 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수임
app.use(async (ctx, next) => {
  console.log(1);
  console.log(ctx.url);

  if (ctx.query.authorized !== "1") {
    ctx.status = 401; // Unauthorized
    return;
  }

  await next(); // next는 Promise이므로 async/await 사용이 가능.
  console.log("END"); // 따라서 다음 미들웨어가 실행된 이후 END가 출력됨
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = "hello world";
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
