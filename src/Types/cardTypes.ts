import { cards, type } from "@prisma/client";


export type cardData = Omit<cards, "id">