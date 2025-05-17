import { Router, type Router as TRouter } from "express";
import HomeRouter from "./HomeRoutes";

const router: TRouter = Router();
router.use("/", HomeRouter);

export default router;
