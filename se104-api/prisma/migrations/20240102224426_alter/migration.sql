/*
  Warnings:

  - Added the required column `shopId` to the `BillDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BillDetail` ADD COLUMN `shopId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
