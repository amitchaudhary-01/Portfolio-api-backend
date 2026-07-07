import express from "express"
import { deleteTable, getTable, getTablebyId, tableCreate, updateTable } from "../controller/table.controller.js"
import { upload } from "../middlerware/multer.js"
import { isAuthenticated } from "../middlerware/isAuthenticated.js"

const router = express.Router()



router.post("/create",upload.single("image"),isAuthenticated, tableCreate)

router.get("/get", isAuthenticated, getTable);

router.get("/get/:id",isAuthenticated, getTablebyId);

router.put("/update/:id",isAuthenticated, updateTable);

router.delete("/delete/:id", deleteTable);






export  default router
