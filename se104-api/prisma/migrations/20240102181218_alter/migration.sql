/*
  Warnings:

  - You are about to alter the column `deliveryId` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Delivery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Delivery` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `deliveryId` on the `DeliveryVoucher` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Bill` DROP FOREIGN KEY `Bill_deliveryId_fkey`;

-- DropForeignKey
ALTER TABLE `DeliveryVoucher` DROP FOREIGN KEY `DeliveryVoucher_deliveryId_fkey`;

-- AlterTable
ALTER TABLE `Bill` MODIFY `deliveryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Delivery` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `DeliveryVoucher` MODIFY `deliveryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `DeliveryVoucher` ADD CONSTRAINT `DeliveryVoucher_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
