import { credentials } from '@prisma/client';
import * as credentialRepository from '../../Repository/credentialRepository'
import { credentialData} from '../../Types/credentialTypes';
import * as password from '../../Utils/passwordEncrypt'


export async function createCredential(credential:credentialData){

  const response:credentials = await credentialRepository.createCredential(credential)

  if(!response){
    throw {type:"bad_request",message:"could not create"}
  }

  return response
}

export async function getCredentials(id:number){

  const credentials = await credentialRepository.getCredentials(id)

  if(!credentials){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  credentials.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return credentials
}

export async function getCredentialsTitle(id:number, title:string){

  const credentials = await credentialRepository.getCredentialsByTitle(id,title)
  console.log(credentials)

  if(credentials[0]){
    console.log(credentials[0])
    throw {type: "forbidden", message: "title already in use"}
  }

}

export async function getCredentialsbyId(id:number,userId:number){

  const credentials = await credentialRepository.getCredentialsById(id,userId)

  if(!credentials){
    throw {type: "err_not_found" , message: "no credentials found"}
  }

  credentials.forEach(e => {
    return e.password = password.cryptrDecrypt(e.password)
  });

  return credentials[0]
}

export async function deleteCredential(id:number,userId:number){

  const {count} = await credentialRepository.deleteCredential(id,userId)

  if(count === 0){
    throw {type: "error_not_found" , message: "no credentials found"}
  }

}
