import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  res.send("I am in the final ware!");
  return res.end();
};

const loggerMiddleWare = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // 함수가 next 를 호출한다면 이 함수는 미들웨어라는걸 의미함
  next();
};

const privateMiddleWare = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("you may continue");
  next();
};

const handleProtected = (req, res) => {
  return res.send("welcome to the private lounge");
};

const handleLogin = (req, res) => {
  return res.send("login here");
};

app.use(loggerMiddleWare);
app.use(privateMiddleWare);
// 순서 중요!
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
