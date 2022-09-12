import { Router } from "express";
import { createSafeNote } from "../Controllers/safeNoteController/createSafeNote";
import { deleteSafeNote } from "../Controllers/safeNoteController/deleteSafeNote";
import { getSafeNotes } from "../Controllers/safeNoteController/getSafeNote";
import { getSafeNotesbyId } from "../Controllers/safeNoteController/getSafeNoteById";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import { checkByTitle } from "../Middleware/safeNoteMidd/checkByTitle";
import { safeNoteSchema } from "../Schema/safeNoteSchema";


const router = Router()

router.post('/safenote/new', joiValidation(safeNoteSchema), jwtValidation, checkByTitle, createSafeNote)

router.get('/safenote', jwtValidation, getSafeNotes)

router.get('/safenote/:id', jwtValidation, getSafeNotesbyId)

router.delete('/safenote/:id/delete', jwtValidation, deleteSafeNote)

export default router;