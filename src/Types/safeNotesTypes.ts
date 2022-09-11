import { safe_notes } from "@prisma/client";


export type safeNoteData = Omit<safe_notes, "id">