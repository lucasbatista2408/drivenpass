import client from "../../database/db_strategy/database"
import { wifi } from "@prisma/client"
import { wifiData } from "../Types/wifiTypes"


export async function createWifi(user:wifiData){
  console.log(user.user_id)

  const wifi = await client.wifi.create({data:user})

  return wifi
}

export async function getWifi(id:number):Promise<wifi[]>{

  const data:wifi[] = await client.wifi.findMany({
    where:{
    user_id:id}})

  return data
}

export async function getWifiById(id:number,userId:number){

  const data:wifi = await client.wifi.findFirstOrThrow({
    where:{
    id: id,
    user_id: userId}})

  return [data]
}

export async function deleteWifi(id:number,userId:number){

  const data = await client.wifi.deleteMany({
    where:{
      id:id,
      user_id: userId}})
  
  return data
}