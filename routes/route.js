import express, { request }  from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../contollers/UserController.js";

const router=express.Router();
const auto=request.get('authorization')

router.get('/',getAllUser)
router.get('/:dni',getUser)
router.post('/',createUser,)
router.put('/:dni',updateUser)
router.delete('/:dni',deleteUser);

export default router;