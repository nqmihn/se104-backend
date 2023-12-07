-- CreateTable
CREATE TABLE `DeliveryDetail` (
    `userId` INTEGER NOT NULL,
    `billId` INTEGER NOT NULL,
    `expectDate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DeliveryDetail_billId_key`(`billId`),
    INDEX `DeliveryDetail_userId_billId_idx`(`userId`, `billId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeliveryDetail` ADD CONSTRAINT `DeliveryDetail_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryDetail` ADD CONSTRAINT `DeliveryDetail_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
