import { Request, Response } from "express"
import { cardData } from "../../Types/cardTypes"
import * as cardsService from "../../Services/cardServices"


export async function getCards(req:any,res:Response){

  const userId:number = req.userId

  const cards = await cardsService.getCards(userId)

  res.status(200).send(cards)
}