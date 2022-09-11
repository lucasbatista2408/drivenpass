import { safe_notes } from '@prisma/client'
import * as safeNoteRepository from '../Repository/safeNoteRepository'
import { safeNoteData } from '../Types/safeNotesTypes'


export async function getNotesByTitle(id:number,title:string){
  
  const note = await safeNoteRepository.getNotesByTitle(id,title)

  if(note[0]){
    throw {type: "forbidden", message: "note exists"}
  }
  
}

export async function createSafeNote(safenote:safeNoteData){

  const response:safe_notes = await safeNoteRepository.createSafeNote(safenote)

  if(!response){
    throw {type:"bad_request",message:"could not create"}
  }

  return response
}

export async function getSafeNotes(id:number){

  const safenote = await safeNoteRepository.getCredentials(id)

  if(!safenote){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  return safenote
}

export async function getSafeNotesbyId(id:number,userId:number){

  const safenote = await safeNoteRepository.getSafeNotesbyId(id,userId)

  if(!safenote){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  return safenote
}

export async function deleteSafeNote(id:number,userId:number){

  const {count} = await safeNoteRepository.deleteSafeNote(id,userId)

  if(count === 0){
    throw {type: "error_not_found" , message: "no credentials found"}
  }

}