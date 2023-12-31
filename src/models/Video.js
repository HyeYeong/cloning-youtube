import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 20,
    maxLength: 80,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 20,
    maxLength: 140,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    //NOTE: Date.now()에 ()를 적지 않는 이유는, 바로 실행시키지 않기 위해서임
  },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

// NOTE: 각자의 특별한 static　함수를 만들 수 있다!
videoSchema.static("formatHashTags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
