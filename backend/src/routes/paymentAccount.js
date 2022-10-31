import express from "express";
import {
    addNewPaymentAccount,
    getAllPaymentAccount,
    getPaymentByIdAccount,
    deletePaymentByIdAccount,
    updatePaymentByIdAccount,
    updateAccountBalanceByUserId
} from "../controllers/paymentAccount";
// import { protect, companyProtect } from "../middleware/auth";

const paymentAccountRouter = express.Router();

paymentAccountRouter.post("/add", addNewPaymentAccount);
paymentAccountRouter.put("/update/:id", updatePaymentByIdAccount);
paymentAccountRouter.put("/balance", updateAccountBalanceByUserId);
paymentAccountRouter.get("/get/:id", getPaymentByIdAccount);
paymentAccountRouter.get("/", getAllPaymentAccount);
paymentAccountRouter.delete("/delete/:id", deletePaymentByIdAccount)

export default paymentAccountRouter;
