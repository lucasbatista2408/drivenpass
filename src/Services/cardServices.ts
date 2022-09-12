import { cards } from "@prisma/client"
import * as cardRepository from "../Repository/cardRepository"
import { cardData } from "../Types/cardTypes"
import * as password from "../Utils/passwordEncrypt"


export async function getCardTitle(id:number, title:string){

  const card = await cardRepository.getCardsByTitle(id,title)

  if(card[0]){
    throw {type: "forbidden", message: "title already in use"}
  }

}

export async function createCard(card:cardData){

  const response:cards = await cardRepository.createCard(card)

  if(!response){
    throw {type:"bad_request",message:"could not create"}
  }

  return response
}

export async function getCards(id:number){

  const cards = await cardRepository.getCards(id)

  if(!cards){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  cards.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return cards
}

export async function getCardsbyId(id:number,userId:number){

  const card = await cardRepository.getCardsById(id,userId)

  if(!card){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  card.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return card[0]
}

export async function deleteCard(id:number,userId:number){

  const {count} = await cardRepository.deleteCard(id,userId)

  if(count === 0){
    throw {type: "error_not_found" , message: "no credentials found"}
  }

}
