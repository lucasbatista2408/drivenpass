import jwt from "jsonwebtoken";
import * as userRepository from '../../Repository/userRepository'
import { userData } from '../../Types/userTypes'

export async function createUser(email:string,password:string){

  const user:userData = {email,password}

  const data = await userRepository.createUser(user)

  if(!data){
    throw {type:"bad_request", message: "could not create new user"}
  }

  return data
}

export async function checkUser(email:string){

  const user = await userRepository.checkUser(email)

  return user
}

export async function checkEmail(email:string){

  const user = await userRepository.checkEmail(email)

  if(user){
    throw {type: "forbidden" , message: "email already in use"}
  }

  return user
}

export function signinUser(id:string,key:string){

  const token = jwt.sign(id, key)

  console.log(token)

  return {token}
}