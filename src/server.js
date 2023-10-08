import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const PATH_USER_EDIT = "/edit";
const PATH_WATCH_VIDEO = "/watch";

// 순서 중요!
//logger함수는 미들웨어를 리턴해준다.
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => {
  return res.send("home");
};
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEidtUser = (req, res) => {
  return res.send("EidtUser");
};
userRouter.get(PATH_USER_EDIT, handleEidtUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => {
  return res.send("watch video");
};
videoRouter.get(PATH_WATCH_VIDEO, handleWatchVideo);

// 글로벌 라우터 사용
// 글로벌 라우터는 / 이후의 가장 첫 번째 알파벳임
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
