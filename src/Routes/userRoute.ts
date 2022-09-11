import { Router } from "express";
import createUser from "../Controllers/userController/createUser";
import { signinUser } from "../Controllers/userController/signinUser";
import joiValidation from "../Middleware/joiValidation";
import checkEmail from "../Middleware/userMidd/checkEmail";
import checkUser from "../Middleware/userMidd/checkUser";
import { userSchema } from "../Schema/userSChema";
import * as passwordUtils from "../Utils/passwordEncrypt"


const router = Router();

//creates new user
router.post('/signup', joiValidation(userSchema), checkEmail, passwordUtils.passwordEncrypt, createUser)

//signs user into the app 
router.post('/signin', joiValidation(userSchema), checkUser, passwordUtils.passwordValidation, signinUser)

export default router;
