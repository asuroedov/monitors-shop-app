import express from "express";
import { getMonitors } from "../controllers/monitorController";

const router = express.Router();

router.get(`/monitors`, getMonitors);

export default router;
