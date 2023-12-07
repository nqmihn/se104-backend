/*
  Warnings:

  - You are about to drop the `DeliveryVoucher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `DeliveryVoucher` DROP FOREIGN KEY `DeliveryVoucher_deliveryId_fkey`;

-- DropTable
DROP TABLE `DeliveryVoucher`;
