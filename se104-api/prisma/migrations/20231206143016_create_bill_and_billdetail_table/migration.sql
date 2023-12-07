-- CreateTable
CREATE TABLE `Bill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productPrice` INTEGER NOT NULL,
    `deliveryPrice` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `address` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'SHIPPING', 'COMPLETE') NOT NULL,
    `deliveryVoucherId` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BillDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `billId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `shopVoucherId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`, `billId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bill` ADD CONSTRAINT `Bill_deliveryVoucherId_fkey` FOREIGN KEY (`deliveryVoucherId`) REFERENCES `DeliveryVoucher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillDetail` ADD CONSTRAINT `BillDetail_shopVoucherId_fkey` FOREIGN KEY (`shopVoucherId`) REFERENCES `ShopVoucher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
