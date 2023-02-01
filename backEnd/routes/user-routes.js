import express from "express";
import { getAllUsers, signup } from "../controllers/user-controller";

const userRouter = express.Router();
userRouter.get("/", getAllUsers);
userRouter.post("/add-user", signup);

export default userRouter;