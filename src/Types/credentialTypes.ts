import { credentials } from "@prisma/client";


// export type cardData = Omit<cards, "id" | "user_id" | "info_id">

export type credentialData = Omit<credentials, "id">
export type credentialD = [credentials]