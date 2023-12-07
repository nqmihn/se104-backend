/*
  Warnings:

  - Added the required column `typeId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `typeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `TypeProduct` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `TypeProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
