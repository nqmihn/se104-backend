-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_factoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_shopId_fkey`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_factoryId_fkey` FOREIGN KEY (`factoryId`) REFERENCES `Factory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_shopId_fkey` FOREIGN KEY (`shopId`) REFERENCES `Shop`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
