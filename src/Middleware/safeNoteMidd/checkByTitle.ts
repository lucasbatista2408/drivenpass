import { Request, Response, NextFunction } from "express";
import * as safeNoteServices from '../../Services/safeNoteServices'


export async function checkByTitle(req:any, res:Response,next:NextFunction){

  const id = req.userId
  const title = req.body.title

  await safeNoteServices.getNotesByTitle(id,title)

  next()
}