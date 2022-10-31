import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import publicTransportProviderRouter from "./publicTransportProvider.routes";
import transportRouteRouter from "./transportRoute.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/publicTransportProvider", publicTransportProviderRouter);
router.use("/traportRoute", transportRouteRouter);
export default router;
