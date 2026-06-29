import express from 'express'
import { authCreate } from '../controller/auth.controller.js'

const router = express.Router()

router.post("/register",authCreate)


export default router
