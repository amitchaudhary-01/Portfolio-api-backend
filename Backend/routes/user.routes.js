import express from 'express'
import { deleteUser, getUser, getUserbyId, updateUser, userCreate } from '../controller/user.controller.js'

 const router =express.Router()

router.post("/user",userCreate)

router.get("/getusers", getUser);

router.get("/getuser/:id", getUserbyId);

router.put("/userupdate/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);



export default router
