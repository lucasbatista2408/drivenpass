CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "email" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL
);