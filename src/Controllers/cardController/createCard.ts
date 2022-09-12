import { Request, Response } from "express"
import { cardData } from "../../Types/cardTypes"
import * as cardService from "../../Services/cardServices"

export default async function createCard(req:any,res:Response){

  const data = req.body
  const user_id = req.userId
  const password = res.locals.password
  const credential:cardData = {
    user_id,
    number: data.number,
    cardholder: data.cardholder,
    cvv: data.cvv,
    expiration: data.expiration,
    is_virtual: data.is_virtual,
    type: data.type,
    password,
    title: data.title
  }

  const response = await cardService.createCard(credential)
  
  res.status(200).send(response)

}