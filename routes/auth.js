import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, This is auth inpute")
})
router.get("/resester", (req, res) => {
    res.send("Hello, This is auth res inpute")
})

export default router