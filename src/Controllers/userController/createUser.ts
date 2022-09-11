import { Request, Response } from "express";
import * as userServices from "../../Services/userServices/userService";


export default async function createUser(req:Request,res:Response){

  const email:string = req.body.email
  const password:string = res.locals.encrypted //ENCRYPTED PASSWORD

  const data = await userServices.createUser(email,password)

  res.status(200).send(data)
}