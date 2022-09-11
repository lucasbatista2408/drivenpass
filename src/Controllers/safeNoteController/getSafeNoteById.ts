import { Request, Response } from "express"
import * as safeNoteServices from "../../Services/safeNoteServices"


export async function getSafeNotesbyId(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  const safenote = await safeNoteServices.getSafeNotesbyId(id,userId)

  res.status(200).send(safenote)
}