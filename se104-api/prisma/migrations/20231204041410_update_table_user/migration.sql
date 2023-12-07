/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `birth` DATETIME(3) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('USER', 'SELLER', 'SHIPPER') NOT NULL;
