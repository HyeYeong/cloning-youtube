import express from "express";
import morgan from "morgan";
import { PORT, PATH } from "./constants/global";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const app = express();

// 순서 중요!
//logger함수는 미들웨어를 리턴해준다.
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// 글로벌 라우터 사용
// 글로벌 라우터는 / 이후의 가장 첫 번째 알파벳임
app.use("/", globalRouter);
app.use(PATH.USERS, userRouter);
app.use(PATH.VIDEOS, videoRouter);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
