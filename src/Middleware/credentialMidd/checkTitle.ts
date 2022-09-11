import { Request, Response, NextFunction } from "express";
import * as credentialService from '../../Services/credentialServices/credentialService'



export async function checkTitle(req:any, res:Response,next:NextFunction){

  const id = req.userId
  const title = req.body.title

  await credentialService.getCredentialsTitle(id,title)

  next()
}