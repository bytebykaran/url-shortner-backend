import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  refreshAccessToken,
  updateprofileImage,
} from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
const router = Router();
router.post("/register", upload.single("profileImage"), registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.get("/me", verifyJWT, getCurrentUser);
router.post("/refresh-token", refreshAccessToken);
router.patch(
  "/profile-image",
  verifyJWT,
  upload.single("profileImage"),
  updateprofileImage,
);

export default router;
