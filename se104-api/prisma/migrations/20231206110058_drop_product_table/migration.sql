/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_factoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_shopId_fkey`;

-- DropTable
DROP TABLE `Product`;
