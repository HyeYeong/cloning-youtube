import express from "express";
import { PATH } from "../constants/global";
import { See, Edit, Delete, Upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(PATH.UPLOAD, Upload);
videoRouter.get(PATH.ID, See);
videoRouter.get(`${PATH.ID}${PATH.EDIT}`, Edit);
videoRouter.get(`${PATH.ID}${PATH.DELETE}`, Delete);

export default videoRouter;
