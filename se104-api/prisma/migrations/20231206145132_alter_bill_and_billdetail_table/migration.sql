-- DropForeignKey
ALTER TABLE `Bill` DROP FOREIGN KEY `Bill_deliveryVoucherId_fkey`;

-- DropForeignKey
ALTER TABLE `BillDetail` DROP FOREIGN KEY `BillDetail_shopVoucherId_fkey`;

-- AlterTable
ALTER TABLE `Bill` MODIFY `deliveryVoucherId` INTEGER NULL;

-- AlterTable
ALTER TABLE `BillDetail` MODIFY `shopVoucherId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryVoucherId_fkey` FOREIGN KEY (`deliveryVoucherId`) REFERENCES `DeliveryVoucher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_shopVoucherId_fkey` FOREIGN KEY (`shopVoucherId`) REFERENCES `ShopVoucher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
