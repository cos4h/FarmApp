import { authRequired } from "../middlewares/validateToken.js";
import { Router } from "express";
import {
  getBills,
  getBill,
  createBill,
  updateBill,
  deleteBill,
} from "../controllers/bill.controller.js";

const router = Router();

router.get("/bill", authRequired, getBills);
router.get("/bill/:id", authRequired, getBill);
router.post("/bill", authRequired, createBill);
router.delete("/bill/:id", authRequired, deleteBill);
router.put("/bill/:id", authRequired, updateBill);

export default router;
