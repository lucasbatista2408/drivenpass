import { safe_notes } from "@prisma/client";
import client from "../../database/db_strategy/database";
import { safeNoteData } from "../Types/safeNotesTypes";


export async function getNotesByTitle(id:number,title:string){
  
  const data:safe_notes[] = await client.safe_notes.findMany({
    where:{
    user_id:id,
    title: title}})

  return data
}

export async function createSafeNote(safenote:safeNoteData){

  const note = await client.safe_notes.create({data:safenote})

  return note
}

export async function getCredentials(id:number):Promise<safe_notes[]>{

  const data:safe_notes[] = await client.safe_notes.findMany({
    where:{
    user_id:id}})

  return data
}

export async function getSafeNotesbyId(id:number,userId:number){

  const data:safe_notes = await client.safe_notes.findFirstOrThrow({
    where:{
    id: id,
    user_id: userId}})

  return data
}

export async function deleteSafeNote(id:number,userId:number){

  const data = await client.safe_notes.deleteMany({
    where:{
      id:id,
      user_id: userId}})
  
  return data
}