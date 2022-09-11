CREATE TABLE "cards" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "users" ("id"),
  "info_id" INTEGER NOT NULL REFERENCES "info_card" ("id"),
  "number" TEXT NOT NULL UNIQUE,
  "cardholder" TEXT NOT NULL,
  "cvv" TEXT NOT NULL,
  "expiration" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "is_vitual" BOOLEAN NOT NULL,
  "type" TYPE NOT NULL 
);

CREATE TYPE type AS ENUM ('D', 'C', 'CD');