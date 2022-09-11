CREATE TABLE "credentials" (
  "id" SERIAL NOT NULL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "users" ("id"),
  "info_id" INTEGER NOT NULL REFERENCES "info_wifi" ("id"),
  "url" TEXT NOT NULL,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL
);
