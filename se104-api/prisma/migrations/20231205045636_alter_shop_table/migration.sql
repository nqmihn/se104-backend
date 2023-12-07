-- DropForeignKey
ALTER TABLE `Shop` DROP FOREIGN KEY `Shop_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Shop` ADD CONSTRAINT `Shop_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
