import {Router} from "express"
import createCard from "../Controllers/cardController/createCard";
import { deleteCard } from "../Controllers/cardController/deleteCard";
import { getCards } from "../Controllers/cardController/getCards";
import { getCardsById } from "../Controllers/cardController/getCardsById";
import { checkCardTitle } from "../Middleware/cardMidd/checkCardTitle";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import { cardSchema } from "../Schema/cardSchema";
import * as validation from "../Utils/passwordEncrypt"


const router = Router()

router.post('/card/new', jwtValidation, joiValidation(cardSchema), checkCardTitle, validation.cryptrEncrypt, createCard)

router.get('/card', jwtValidation, getCards)

router.get('/card/:id', jwtValidation, getCardsById)

router.delete('/card/:id/delete', jwtValidation, deleteCard)

export default router