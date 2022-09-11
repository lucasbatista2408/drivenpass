import { Request, Response } from "express";
import * as userServices from "../../Services/userServices/userService";
import dotenv from "dotenv";

dotenv.config();

export function signinUser(req:Request,res:Response){

  const access_key:string = String(process.env.ACCESS_TOKEN_KEY)
  const id = String(res.locals.id)

  const token = userServices.signinUser(id,access_key)
  console.log(token)

  res.status(200).send(token)
}