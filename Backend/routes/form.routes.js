import express from 'express'
import { getForm, uformCreate } from '../controller/userform.controller.js'
import { upload } from '../middlerware/multer.js'

const router = express.Router()

router.post("/create",upload.array("images", 5),uformCreate)

router.get("/getform",getForm)


export default router
