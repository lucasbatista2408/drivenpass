import { Request, Response } from "express"
import * as safeNoteServices from "../../Services/safeNoteServices"

export async function getSafeNotes(req:any,res:Response){

  const userId:number = req.userId

  const safenote = await safeNoteServices.getSafeNotes(userId)

  res.status(200).send(safenote)
}