import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import publicTransportProviderRouter from "./publicTransportProvider.routes";
import transportRouteRouter from "./transportRoute.routes";
import journey from "./journey.routes";
import timeTable from "./timeTable.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/publicTransportProvider", publicTransportProviderRouter);
router.use("/traportRoute", transportRouteRouter);
router.use("/journey", journey);
router.use("/timeTable", timeTable);
export default router;
