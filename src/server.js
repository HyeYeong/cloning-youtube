import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  res.send("I am in the final ware!");
  return res.end();
};

//logger함수는 미들웨어를 리턴해준다.
const logger = morgan("dev");

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

// 순서 중요!
app.use(logger);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
