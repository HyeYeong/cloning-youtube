import express from "express";
import { Join, Login } from "../controllers/userController";
import { Trending, Search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", Trending);
globalRouter.get("/join", Join);
globalRouter.get("/login", Login);
globalRouter.get("/search", Search);

export default globalRouter;
