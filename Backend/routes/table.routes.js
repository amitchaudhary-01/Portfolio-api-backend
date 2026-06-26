import express from "express"
import { deleteTable, getTable, getTablebyId, tableCreate, updateTable } from "../controller/table.controller.js"
import { upload } from "../middlerware/multer.js"


const router = express.Router()



router.post("/table",upload.single("image"), tableCreate)

router.get("/gettable", getTable);

router.get("/gettable/:id", getTablebyId);

router.put("/updatetable/:id",upload.single("image"), updateTable);

router.delete("/deletetable/:id", deleteTable);






export  default router
