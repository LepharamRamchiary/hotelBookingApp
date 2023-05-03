import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET
router.get("/find/:id", getHotel);
// GET ALL
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
// router.get("/countByType", getAllHotel);

export default router 