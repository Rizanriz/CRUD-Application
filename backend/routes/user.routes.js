import express from "express"
import { create, deleteData, getData, updateData } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/add",create)
router.get("/get",getData)
router.put("/update/:id",updateData)
router.delete("/delete/:id",deleteData)

export default router