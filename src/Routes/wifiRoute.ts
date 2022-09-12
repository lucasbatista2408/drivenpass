import { Router } from "express";
import createWifi from "../Controllers/wifiController/createWifi";
import { deleteWifi } from "../Controllers/wifiController/deleteWifi";
import { getWifi } from "../Controllers/wifiController/getWifi";
import { getWifiById } from "../Controllers/wifiController/getWifiById";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import { wifiSchema } from "../Schema/wifiSchema";
import * as validation from "../Utils/passwordEncrypt"


const router = Router()


router.post('/wifi/new', jwtValidation, joiValidation(wifiSchema), validation.cryptrEncrypt, createWifi)

router.get('/wifi', jwtValidation, getWifi)

router.get('/wifi/:id', jwtValidation, getWifiById)

router.delete('/wifi/:id/delete', jwtValidation, deleteWifi)


export default router