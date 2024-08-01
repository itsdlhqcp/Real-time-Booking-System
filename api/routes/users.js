import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
// router.post("/", createUser);
//UPDATE
router.put("/:id", verifyUser,  updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GET ALL
router.get("/", getAllUsers);

export default router