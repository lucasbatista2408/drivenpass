import { Request, Response } from "express"
import { wifiData } from "../../Types/wifiTypes"
import * as wifiService from "../../Services/wifiServices"


export async function getWifiById(req:any,res:Response){

  const userId:number = req.userId
  const id = parseInt(req.params.id)

  const wifi = await wifiService.getWifibyId(id,userId)

  res.status(200).send(wifi)
}