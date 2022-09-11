CREATE TABLE "safe_notes" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES "users"("id"),
  "title" TEXT NOT NULL,
  "note" TEXT NOT NULL
);