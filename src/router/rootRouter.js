import express from "express";
import { GetJoin, PostJoin, Login } from "../controllers/userController";
import { Home, Search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", Home);
rootRouter.route("/join").get(GetJoin).post();
rootRouter.get("/login", Login);
rootRouter.get("/search", Search);

export default rootRouter;
