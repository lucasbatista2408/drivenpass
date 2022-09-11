import {Request, Response, NextFunction} from 'express'
import * as userServices from "../../Services/userServices/userService";



export default async function checkEmail(req:Request,res:Response,next:NextFunction){

  const email:string = req.body.email

  await userServices.checkEmail(email)

  next()
}