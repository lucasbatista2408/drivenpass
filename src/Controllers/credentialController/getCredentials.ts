import { Request, Response } from "express"
import { credentialData } from "../../Types/credentialTypes"
import * as credentialService from "../../Services/credentialServices/credentialService"


export async function getCredentials(req:any,res:Response){

  const userId:number = req.userId

  const credentials = await credentialService.getCredentials(userId)

  res.status(200).send(credentials)
}