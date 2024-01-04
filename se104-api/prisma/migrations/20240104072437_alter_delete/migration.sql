-- DropForeignKey
ALTER TABLE `Bill` DROP FOREIGN KEY `Bill_deliveryId_fkey`;

-- DropForeignKey
ALTER TABLE `Bill` DROP FOREIGN KEY `Bill_deliveryVoucherId_fkey`;

-- DropForeignKey
ALTER TABLE `BillDetail` DROP FOREIGN KEY `BillDetail_productId_fkey`;

-- DropForeignKey
ALTER TABLE `BillDetail` DROP FOREIGN KEY `BillDetail_shopId_fkey`;

-- DropForeignKey
ALTER TABLE `BillDetail` DROP FOREIGN KEY `BillDetail_shopVoucherId_fkey`;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryVoucherId_fkey` FOREIGN KEY (`deliveryVoucherId`) REFERENCES `DeliveryVoucher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `Delivery`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_shopVoucherId_fkey` FOREIGN KEY (`shopVoucherId`) REFERENCES `ShopVoucher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
