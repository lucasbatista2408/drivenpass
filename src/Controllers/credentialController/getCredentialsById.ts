import { Request, Response } from "express"
import { credentialData } from "../../Types/credentialTypes"
import * as credentialService from "../../Services/credentialServices/credentialService"


export async function getCredentialsById(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  const credential = await credentialService.getCredentialsbyId(id,userId)

  res.status(200).send(credential)
}