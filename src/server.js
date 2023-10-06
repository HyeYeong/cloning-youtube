import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  res.send("I am in the final ware!");
  return res.end();
};

const gossipMiddleWare = (req, res, next) => {
  console.log(`someone is trying to go ${req.url}`);
  // 함수가 next 를 호출한다면 이 함수는 미들웨어라는걸 의미함
  next();
};

const handleLogin = (req, res) => {
  return res.send("login here");
};

app.get("/", gossipMiddleWare, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
