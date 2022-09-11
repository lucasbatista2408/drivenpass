import { Request, Response } from "express"
import * as safeNoteServices from "../../Services/safeNoteServices"


export async function deleteSafeNote(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  await safeNoteServices.deleteSafeNote(id,userId)

  res.sendStatus(200)

}