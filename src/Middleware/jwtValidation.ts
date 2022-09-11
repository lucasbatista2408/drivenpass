import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();


export async function jwtValidation(req:any,res:Response,next:NextFunction){

  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if(!token) return res.sendStatus(401);

  const secret_key = String(process.env.ACCESS_TOKEN_KEY);

  jwt.verify(token, secret_key, (err: any, userId: any) => {
    if(err) return res.sendStatus(403)
    req.userId = parseInt(userId);
    next()
  })

}