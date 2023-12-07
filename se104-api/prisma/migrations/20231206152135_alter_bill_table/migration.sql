/*
  Warnings:

  - Made the column `address` on table `Bill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `Bill` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Bill` MODIFY `address` VARCHAR(191) NOT NULL,
    MODIFY `phoneNumber` VARCHAR(191) NOT NULL;
