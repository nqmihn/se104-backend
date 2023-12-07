/*
  Warnings:

  - Added the required column `deliveryId` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bill` ADD COLUMN `deliveryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
