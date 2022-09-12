import { Request, Response } from "express"
import { cardData } from "../../Types/cardTypes"
import * as cardService from "../../Services/cardServices"


export async function getCardsById(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  const credential = await cardService.getCardsbyId(id,userId)

  res.status(200).send(credential)
}