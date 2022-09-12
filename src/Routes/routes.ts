import { Router } from "express";
import userRoute from './userRoute'
import credentialRoute from './credentialRoute'
import safeNotesRoute from './safeNotesRoute'
import cardRoute from './cardRoute'
import wifiRoute from './wifiRoute'

const router = Router();


router.use(userRoute)
router.use(credentialRoute)
router.use(safeNotesRoute)
router.use(cardRoute)
router.use(wifiRoute)


export default router