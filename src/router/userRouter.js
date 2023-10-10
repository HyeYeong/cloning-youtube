import express from "express";
import { PATH } from "../constants/global";
import { Edit, Delete, Logout, See } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(PATH.LOGOUT, Logout);
userRouter.get(PATH.EDIT, Edit);
userRouter.get(PATH.DELETE, Delete);
userRouter.get("/:id", See);

export default userRouter;
