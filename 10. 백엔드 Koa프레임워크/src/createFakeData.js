import Post from "./models/post";

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `post #${i}`,
    body:
      "Mongoose v5.9.15: Deprecation Warnings, DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead. function, so it uses the MongoDB driver's findAndModify() function instead. DeprecationWarning: collection.remove is deprecated. DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead. I got the warning msg if findByIdAndUpdate used but no findAndModify in the project.",
    tags: ["가짜", "데이터"],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
