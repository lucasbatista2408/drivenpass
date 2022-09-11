/*
  Warnings:

  - You are about to drop the `info_cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `info_credentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `info_wifi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `label` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `wifi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `wifi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `wifi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "info_cards" DROP CONSTRAINT "info_cards_cards_id_fkey";

-- DropForeignKey
ALTER TABLE "info_credentials" DROP CONSTRAINT "info_credentials_credentials_id_fkey";

-- DropForeignKey
ALTER TABLE "info_wifi" DROP CONSTRAINT "info_wifi_wifi_id_fkey";

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wifi" ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "info_cards";

-- DropTable
DROP TABLE "info_credentials";

-- DropTable
DROP TABLE "info_wifi";
