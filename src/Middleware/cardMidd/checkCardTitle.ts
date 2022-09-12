import { Request, Response, NextFunction } from "express";
import * as cardServices from "../../Services/cardServices"


export async function checkCardTitle(req:any, res:Response,next:NextFunction){

  const id = req.userId
  const title = req.body.title

  await cardServices.getCardTitle(id,title)

  next()
}