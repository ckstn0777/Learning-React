import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 비밀번호 암호화(인스턴스 메소드)
UserSchema.methods.setPassword = async function (password) {
  // 콜백함수로 작성시 this는 전역이므로 사용금지
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash; // 여기서 this는 이메소드를 호출한 객체 user가 된다
};
// 비밀번호 체크(인스턴스 메소드)
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};
// 비밀번호 제외(인스턴스 메소드)
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

// 유저가 있는지 확인(스태틱 메소드)
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);
export default User;
