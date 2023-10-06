import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  res.send("hello I am response");
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`server listening on port http://localhost:${PORT} -!`);
app.listen(PORT, handleListening);
