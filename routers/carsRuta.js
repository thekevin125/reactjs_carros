import express from "express";
import { addCar, modifyCar, readCar, delateCar } from "../controllers/cars.js";

const router = express.Router();
router.post('/', addCar)
router.patch('/modifyCar/:id', modifyCar)
router.get('/readCar', readCar)
router.delete('/delate/:id', delateCar)
export default router