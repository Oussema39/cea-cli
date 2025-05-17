import { Router } from "express";
import { getHome } from "../controllers/HomeController";

const router = Router();

router.get("/", getHome);

export default router;
