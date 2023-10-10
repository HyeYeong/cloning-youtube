import express from "express";
import { PATH } from "../constants/global";
import { Edit, Delete } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(PATH.EDIT, Edit);
userRouter.get(PATH.DELETE, Delete);

export default userRouter;
