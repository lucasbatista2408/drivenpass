import { Request, Response } from "express"
import { wifiData } from "../../Types/wifiTypes"
import * as wifiService from "../../Services/wifiServices"


export async function getWifi(req:any,res:Response){

  const userId:number = req.userId

  const wifi = await wifiService.getWifi(userId)

  res.status(200).send(wifi)
}