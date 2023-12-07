/*
  Warnings:

  - Added the required column `description` to the `DeliveryVoucher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ShopVoucher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DeliveryVoucher` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ShopVoucher` ADD COLUMN `description` VARCHAR(191) NOT NULL;
