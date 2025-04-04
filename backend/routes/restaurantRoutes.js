import express from "express";
import { getRestaurants, addRestaurant } from "../controllers/restaurantController.js";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", addRestaurant);

export default router;
