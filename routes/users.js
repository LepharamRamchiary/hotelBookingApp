import express from "express";
import { updateUser, deleteUser, getUser, getAllUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentaioation", verifyToken, (req, res, next) =>{
//     res.send("Hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) =>{
//     res.send("Hello user, you are logged in amd you can delete you account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) =>{
//     res.send("Hello Admin, you are logged in amd you can delete all accounts");
// });


// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);
// GET
router.get("/:id", verifyUser, getUser);
// GET ALL
router.get("/", verifyAdmin, getAllUser);


export default router