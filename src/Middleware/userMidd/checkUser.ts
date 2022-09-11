import { Request, Response, NextFunction } from "express";
import * as userServices from "../../Services/userServices/userService";


export default async function checkUser(req:Request, res:Response, next:NextFunction){

  const email:string = req.body.email

  const user = await userServices.checkUser(email)

  res.locals.password = user.password
  res.locals.id = user.id
  
  next()
}