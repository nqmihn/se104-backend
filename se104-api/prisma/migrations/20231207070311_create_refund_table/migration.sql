/*
  Warnings:

  - Added the required column `updatedAt` to the `DeliveryDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `DeliveryDetail` DROP FOREIGN KEY `DeliveryDetail_billId_fkey`;

-- DropForeignKey
ALTER TABLE `DeliveryDetail` DROP FOREIGN KEY `DeliveryDetail_userId_fkey`;

-- AlterTable
ALTER TABLE `DeliveryDetail` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Refund` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `billId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'PROCESSING', 'COMPLETE') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeliveryDetail` ADD CONSTRAINT `DeliveryDetail_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryDetail` ADD CONSTRAINT `DeliveryDetail_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refund` ADD CONSTRAINT `Refund_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Refund` ADD CONSTRAINT `Refund_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
