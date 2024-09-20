import { Router } from "express";
import { getAskAnswer } from "../controllers/AiController.js";


const aiRoutes = Router();

aiRoutes.post("/ask",  getAskAnswer);

export default aiRoutes;
