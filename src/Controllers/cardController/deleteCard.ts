import { Request, Response } from "express"
import * as cardService from "../../Services/cardServices"


export async function deleteCard(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  await cardService.deleteCard(id,userId)

  res.sendStatus(200)

}