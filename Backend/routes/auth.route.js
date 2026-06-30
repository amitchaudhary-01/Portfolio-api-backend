import express from 'express'
import { authCreate, login } from '../controller/auth.controller.js'

const router = express.Router()

router.post("/register",authCreate)

router.post("/login",login)


export default router
