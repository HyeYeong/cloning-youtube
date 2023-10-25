import mongoose from "mongoose";

// mongoDB 데이터베이스에 연결. 이름을 꼭 명시해줘야함.
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB error! ", error);

db.on("error", handleError);
db.once("open", handleOpen);
