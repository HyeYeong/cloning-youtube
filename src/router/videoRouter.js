import express from "express";
import { PATH } from "../constants/global";
import { Watch, Edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(PATH.WATCH, Watch);
videoRouter.get(PATH.EDIT, Edit);

export default videoRouter;
