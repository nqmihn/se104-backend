import { PrismaClient } from '@prisma/client'
import { users } from './factory/user.factory'
const prisma = new PrismaClient()

async function main() {
    for (let user of users) {
        await prisma.user.create({
            data: user
        })
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })