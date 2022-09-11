import { Request, Response } from "express"
import * as credentialService from "../../Services/credentialServices/credentialService"


export async function deleteCredential(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  await credentialService.deleteCredential(id,userId)

  res.sendStatus(200)

}