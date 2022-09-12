import { Request, Response } from "express"
import * as wifiService from "../../Services/wifiServices"


export async function deleteWifi(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  await wifiService.deleteWifi(id,userId)

  res.sendStatus(200)

}