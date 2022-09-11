/*
  Warnings:

  - You are about to drop the column `label` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `wifi` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `wifi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "label",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "label",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "wifi" DROP COLUMN "label",
DROP COLUMN "name";
