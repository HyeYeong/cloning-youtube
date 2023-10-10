import express from "express";
import { Join } from "../controllers/userController";
import { Trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", Trending);
globalRouter.get("join", Join);

export default globalRouter;
