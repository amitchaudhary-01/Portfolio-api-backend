import express from 'express'
import { deleteTableProduct, getTableProduct, getTableProductbyId, tableproductCreate, updateTableProduct } from '../controller/tableproduct.controller.js'
import { upload } from '../middlerware/multer.js'

const router = express.Router()

router.post("/producttable",upload.single("image"),tableproductCreate)

router.get("/producttab le",getTableProduct)

router.get("/producttable/:id",getTableProductbyId)

router.put("/producttable/:id",upload.single("image"),updateTableProduct)

router.delete("/producttable/:id",deleteTableProduct)



export default router
