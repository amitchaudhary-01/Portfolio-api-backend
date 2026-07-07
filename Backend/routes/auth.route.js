import express from 'express'
import { authCreate, login, logout, me } from '../controller/auth.controller.js'

const router = express.Router()

router.post("/register",authCreate)

router.post("/login",login)

router.post("/logout",logout)

router.post("/me",me)


export default router
