import { Router } from "express";
import userRoute from './userRoute'
import credentialRoute from './credentialRoute'
import safeNotesRoute from './safeNotesRoute'

const router = Router();

router.use(userRoute)
router.use(credentialRoute)
router.use(safeNotesRoute)

export default router