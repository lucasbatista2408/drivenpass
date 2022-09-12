import { wifi } from "@prisma/client"
import * as wifiRepository from "../Repository/wifiRepository"
import { wifiData } from "../Types/wifiTypes"
import * as password from "../Utils/passwordEncrypt"


export async function createWifi(wifi:wifiData){

  const response:wifi = await wifiRepository.createWifi(wifi)

  if(!response){
    throw {type:"bad_request",message:"could not create"}
  }

  return response
}

export async function getWifi(id:number){

  const wifi = await wifiRepository.getWifi(id)

  if(!wifi){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  wifi.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return wifi
}

export async function getWifibyId(id:number,userId:number){

  const wifi = await wifiRepository.getWifiById(id,userId)

  if(!wifi){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  wifi.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return wifi[0]
}

export async function deleteWifi(id:number,userId:number){

  const {count} = await wifiRepository.deleteWifi(id,userId)

  if(count === 0){
    throw {type: "error_not_found" , message: "no credentials found"}
  }

}