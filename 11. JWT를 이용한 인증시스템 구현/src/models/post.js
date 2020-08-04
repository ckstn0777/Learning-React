import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 지정
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model("Post", PostSchema); // 모델 인스턴스 생성
// 첫번째 파라미터는 스키마 이름, 두번째 파라미터는 스키마 객체.
// 스카마 이름을 정해주면 데이터베이스는 그 이름의 복수형태로 데이터베이스에 컬렉션 이름을 만듬
export default Post;
