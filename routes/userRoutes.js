import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// router.route("/").post((res,req)=> res.send("hello"));
router.post("/",registerUser);
router.post("/login", loginUser);

// export { router as userRoutes };

export {router as uRouter}