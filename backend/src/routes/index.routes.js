import express from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes';
import paymentRouter from "./payment.routes";
import paymentAccountRouter from "./paymentAccount";
import paymentCardRouter from "./paymentCard";

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/payment', paymentRouter);
router.use('/account', paymentAccountRouter);
router.use('/card', paymentCardRouter);

export default router;