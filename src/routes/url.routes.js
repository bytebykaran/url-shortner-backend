import { Router } from "express";
import { createShortUrl,getUrlStats } from "../controllers/url.controllers.js";

const router=Router()
router.route("/").post(createShortUrl)
router.get("/:shortCode/stats",getUrlStats)
export default router