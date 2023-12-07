/*
  Warnings:

  - You are about to alter the column `productPrice` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Bill` MODIFY `productPrice` DOUBLE NOT NULL;
