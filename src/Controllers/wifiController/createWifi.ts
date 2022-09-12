import { Request, Response } from "express"
import { wifiData } from "../../Types/wifiTypes"
import * as wifiService from "../../Services/wifiServices"

export default async function createWifi(req:any,res:Response){

  const data = req.body
  const user_id = req.userId
  const password = res.locals.password
  const wifi:wifiData = {
    user_id,
    network: data.network,
    password,
    title: data.title
  }

  const response = await wifiService.createWifi(wifi)
  
  res.status(200).send(response)

}