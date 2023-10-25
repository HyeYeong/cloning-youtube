import express from "express";
import morgan from "morgan";
import { PORT, PATH } from "./constants/global";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

const app = express();

// 순서 중요!
//logger함수는 미들웨어를 리턴해준다.
//router를 사용하기 전에 미들웨어를 작성해줘야한다.
const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
// urlencoded 가 하는 일? express application가 form의 value 값을 이해할 수 있도록 하고, 우리가 사용할 수 있는 자바스크립트 형식으로 변환해준다.
app.use(express.urlencoded({ extended: true }));

// 글로벌 라우터 사용
// 글로벌 라우터는 / 이후의 가장 첫 번째 알파벳임
app.use("/", globalRouter);
app.use(PATH.USERS, userRouter);
app.use(PATH.VIDEOS, videoRouter);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
