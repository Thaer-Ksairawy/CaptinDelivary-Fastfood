import express from "express";

import{
getAllData,
} from "../controllers/food-conrollers.js"

const foodRoutes = express.Router();

foodRoutes.get('/data/all', getAllData);

export default foodRoutes;