import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
  const james = await prisma.donation.create({
    data: {
      email: 'james@gmail.com',
      displayName: 'james kaka',
      count: 5
    }
  })

  console.log({ james })
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
