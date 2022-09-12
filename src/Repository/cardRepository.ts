import client from "../../database/db_strategy/database"
import { cards } from "@prisma/client"
import { cardData } from "../Types/cardTypes"


export async function getCardsByTitle(id:number,title:string):Promise<cards[]>{

  const data:cards[] = await client.cards.findMany({
    where:{
    user_id:id,
    title: title}})

  return data
}

export async function createCard(user:cardData){
  console.log(user.user_id)

  const card = await client.cards.create({data:user})

  return card
}

export async function getCards(id:number):Promise<cards[]>{

  const data:cards[] = await client.cards.findMany({
    where:{
    user_id:id}})

  return data
}

export async function getCardsById(id:number,userId:number){

  const data:cards = await client.cards.findFirstOrThrow({
    where:{
    id: id,
    user_id: userId}})

  return [data]
}

export async function deleteCard(id:number,userId:number){

  const data = await client.cards.deleteMany({
    where:{
      id:id,
      user_id: userId}})
  
  return data
}