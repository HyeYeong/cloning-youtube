import "./db"; // 이 파일을 보는 순간, 내 서버가 mongoDB에 연결될거임
import Video from "./models/Video"; // 마찬가지로, 앞에서 import를 해야지만 모든 곳에서 데이터베이스를 사용할 수 있음.
import User from "./models/User";
import { PORT } from "./constants/global";
import app from "./server";

const handleListening = () =>
  console.log(`✅ server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
