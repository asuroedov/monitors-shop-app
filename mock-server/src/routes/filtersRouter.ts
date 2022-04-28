import express from "express";
import { getFilters } from "../controllers/filtersController";

const router = express.Router();

router.get(`/filters`, getFilters);

export default router;
