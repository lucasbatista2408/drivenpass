import { users } from '@prisma/client';
import client from '../../database/db_strategy/database';
import { userData } from '../Types/userTypes';



export async function createUser(user:userData){

  const data = await client.users.create({data:user})
  console.log(data)

  return data
}

export async function checkUser(email:string){

  const user:users = await client.users.findUniqueOrThrow({where: {email: email}})

  return user
}

export async function checkEmail(email:string){

  const user = await client.users.findUnique({where: {email: email}})

  return user
}