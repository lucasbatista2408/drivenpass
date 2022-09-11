CREATE TABLE "wifi" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER NOT NULL REFERENCES "users"("id"),
  "info_id" INTEGER NOT NULL REFERENCES "info_wifi" ("id"),
  "network" TEXT NOT NULL,
  "password" TEXT NOT NULL 
);
