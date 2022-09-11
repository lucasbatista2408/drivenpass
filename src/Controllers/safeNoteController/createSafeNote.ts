import { Request, Response } from "express"
import { safeNoteData } from "../../Types/safeNotesTypes"
import * as safeNoteService from "../../Services/safeNoteServices"


export async function createSafeNote(req:any,res:Response){

  const data = req.body
  const user_id = req.userId

  const safenote: safeNoteData = {
    user_id,
    title: data.title,
    note: data.note
  }

  const response = await safeNoteService.createSafeNote(safenote)
  
  res.status(200).send(response)
}