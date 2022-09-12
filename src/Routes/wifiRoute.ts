import { Router } from "express";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";


const router = Router()


router.post('/card/new', jwtValidation, joiValidation(cardSchema), checkCardTitle, validation.cryptrEncrypt, createCard)

router.get('/credential', jwtValidation, getCards)

router.get('/credential/:id', jwtValidation, getCardsById)

router.delete('/credential/:id/delete', jwtValidation, deleteCard)


export default router