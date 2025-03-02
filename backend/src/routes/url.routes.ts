import express from "express";
import { shortenUrl, redirectUrl } from "../controllers/url.controller";

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortUrl", redirectUrl);

export default router;
