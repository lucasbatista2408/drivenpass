/*
  Warnings:

  - You are about to drop the column `info_id` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `is_vitual` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `info_id` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `info_id` on the `wifi` table. All the data in the column will be lost.
  - You are about to drop the `info_card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `info_credential` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `is_virtual` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `number` on the `cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `wifi_id` to the `info_wifi` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `safe_notes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_info_id_fkey";

-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_user_id_fkey";

-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_info_id_fkey";

-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_user_id_fkey";

-- DropForeignKey
ALTER TABLE "safe_notes" DROP CONSTRAINT "safe_notes_user_id_fkey";

-- DropForeignKey
ALTER TABLE "wifi" DROP CONSTRAINT "wifi_info_id_fkey";

-- DropForeignKey
ALTER TABLE "wifi" DROP CONSTRAINT "wifi_user_id_fkey";

-- DropIndex
DROP INDEX "cards_number_key";

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "info_id",
DROP COLUMN "is_vitual",
ADD COLUMN     "is_virtual" BOOLEAN NOT NULL,
DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "info_id";

-- AlterTable
ALTER TABLE "info_wifi" ADD COLUMN     "wifi_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "safe_notes" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "wifi" DROP COLUMN "info_id";

-- DropTable
DROP TABLE "info_card";

-- DropTable
DROP TABLE "info_credential";

-- CreateTable
CREATE TABLE "info_credentials" (
    "id" SERIAL NOT NULL,
    "credentials_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "info_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "info_cards" (
    "id" SERIAL NOT NULL,
    "cards_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "info_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "safe_notes" ADD CONSTRAINT "safe_notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info_wifi" ADD CONSTRAINT "info_wifi_wifi_id_fkey" FOREIGN KEY ("wifi_id") REFERENCES "wifi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info_credentials" ADD CONSTRAINT "info_credentials_credentials_id_fkey" FOREIGN KEY ("credentials_id") REFERENCES "credentials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info_cards" ADD CONSTRAINT "info_cards_cards_id_fkey" FOREIGN KEY ("cards_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
