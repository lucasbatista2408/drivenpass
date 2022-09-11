import { Request, Response } from "express"
import { credentialData } from "../../Types/credentialTypes"
import * as credentialService from "../../Services/credentialServices/credentialService"

export default async function createCredential(req:any,res:Response){

  const data = req.body
  const user_id = req.userId
  const password = res.locals.password
  const credential:credentialData = {
    user_id,
    url: data.url,
    username: data.username,
    password,
    title: data.title
  }

  const response = await credentialService.createCredential(credential)
  
  res.status(200).send(response)

}