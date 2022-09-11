import { credentials, Prisma } from "@prisma/client";
import client from "../../database/db_strategy/database";
import { credentialD, credentialData } from "../Types/credentialTypes";


export async function createCredential(user:credentialData){
  console.log(user.user_id)

  const credential = await client.credentials.create({data:user})

  return credential
}

export async function getCredentials(id:number):Promise<credentials[]>{

  const data:credentials[] = await client.credentials.findMany({
    where:{
    user_id:id}})

  return data
}

export async function getCredentialsByTitle(id:number,title:string):Promise<credentials[]>{

  const data:credentials[] = await client.credentials.findMany({
    where:{
    user_id:id,
    title: title}})

  return data
}

export async function getCredentialsById(id:number,userId:number){

  const data:credentials = await client.credentials.findFirstOrThrow({
    where:{
    id: id,
    user_id: userId}})

  return [data]
}

export async function deleteCredential(id:number,userId:number){

  const data = await client.credentials.deleteMany({
    where:{
      id:id,
      user_id: userId}})
  
  return data
}

// client.$queryRaw(Prisma.sql`DELETE FROM credentials WHERE (id=$1 AND user_id=$2)`, [id,userId])