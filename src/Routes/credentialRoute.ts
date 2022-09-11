import { Router } from "express";
import createCredential from "../Controllers/credentialController/createCredential";
import { deleteCredential } from "../Controllers/credentialController/deleteCredential";
import { getCredentials } from "../Controllers/credentialController/getCredentials";
import { getCredentialsById } from "../Controllers/credentialController/getCredentialsById";
import { checkTitle } from "../Middleware/credentialMidd/checkTitle";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import { userSchema } from "../Schema/userSChema";
import * as passwordUtils from "../Utils/passwordEncrypt"

const router = Router()

router.post('/credential/new', jwtValidation, checkTitle, passwordUtils.cryptrEncrypt, createCredential)

router.get('/credential', jwtValidation, getCredentials)

router.get('/credential/:id', jwtValidation, getCredentialsById)

router.delete('/credential/:id/delete', jwtValidation, deleteCredential)

export default router