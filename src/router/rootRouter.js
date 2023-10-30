import express from "express";
import {
  GetJoin,
  PostJoin,
  GetLogin,
  PostLogin,
} from "../controllers/userController";
import { Home, Search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", Home);
rootRouter.route("/join").get(GetJoin).post(PostJoin);
rootRouter.route("/login").get(GetLogin).post(PostLogin);
rootRouter.get("/search", Search);

export default rootRouter;
