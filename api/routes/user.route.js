import express from "express";
import test, { getUserListings, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser)
router.get('/listings/:id',getUserListings)

export default router;
