import express from "express";
import { register, update, login, getAll } from "../controller/user.controller";

const router = express.Router();

// register user
router.post("/", register);

// get all users
router.get("/", getAll);

// update user profile
router.put("/:id", update);

// login
router.post("/login", login);

export default router;
