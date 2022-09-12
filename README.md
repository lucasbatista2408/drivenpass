<h1 style="color:lightgreen;"> DrivenPass 🔐</h1>

![output-onlinepngtools](https://user-images.githubusercontent.com/98403660/189733250-2cd73379-7707-429e-9d0c-616dfda0aa6a.png)

## This Project was built with the following technologies:
* **Node** 16.15.0
* **Express** 4.18.1
* **Prisma** 4.3.1
* **TypeScript** 4.8.2

## Description

This is a brand new password manager service to securely store your personal information such as:
* **Login credentials** from different websites, 
* **Credit** and/or **Debit card** information,
* **Wi-Fi** network and password,
* and those **safe notes** you wouldn't like no one to see but you.

## How to use

This projected, is designed to be a server side application for managing and safely storing many kinds of personal information, they are: website and apps credentials, bank card information, wifi passwords and safe notes.

All the information needed to make good use of this application will be found below, such as information needed to be sent to the server.

### 1. User SignUp

This is the first route, where the user creates their account.

**Path**: /signup

**Body**:
_email_ and _password_

**p.s.:** password must be at least 10 characters long.


### 2. User Login

This is where the just created user will be requesting to enter the application.

**Path**: /sigin

**Body**:
_email_ and _password_

**Response**: jwt (webToken) that will be used from now on to send all the requests server-side.


### 3. Create Credentials / Card / Wifi / SafeNote

In order to create a secure information the user needs to send the following data to the specified path below.

info = credential | card | wifi | safenote

**Path**: /info/new.
	
	So you just need to exchange the **info** field at the specified path to the name of the information you want to create
	and it's good to go.

**Headers**:
_authorization token_ received when logging in

**Credential Body**:
_URL_ / _username_ / _password_ / _title_

**Card Body**:
_number_ / _cardholder_ / _cvv_ / _expiration_ / _password_ / is_virtual / _type_ / _title_

	Note: The type of the card can only be of three (3) kinds: C as Credit, D as Debit, CD as both credit and debit. 
	Note2: "is_virtual" field requires a boolean entry, so it can only be TRUE or FALSE.

**Wifi Body**:
_network_ / _password

**Safe Note Body**:
_title_ / _note_

	Note: the note itself cannot be longer than 1000 characters.

**Response**: the server returns the just created information.

	General Note: all field are STRINGS, no numbers.


### 4. Getting information

For you to get information there are two ways. You can get all the credentials of its kind or just one of them. If this is the second case, all you need is to send the info "id" on it's path. Just like specified below:

info = credential | card | wifi | safenote

**Path**: /info -> (_to get all user info of it's kind_)

**Path**: /info/id -> (_to get only one info_)
	
	So you just need to exchange the **info** field at the specified path to the name of the information you want to create
	and it's good to go.

**Headers**:
_authorization token_ received when logging in.

**Response**: the server returns the requested information.


### 5.Deleting information

All you need to send a deleting information is the id of the information you want to delete, then the application will check if it belongs to the user requesting it and if it is, the server will then delete what was requested.
In order to the this procedure, that's what you need:

info = credential | card | wifi | safenote

**Path**: /info/id/delete.
	
	So you just need to exchange the **info** field at the specified path to the name of the information you want to create
	and it's good to go.

**Headers**:
_authorization token_ received when logging in

**Body**:
_email_ and _password_

**Response**: sucess or error.

