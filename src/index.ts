import { prisma } from './config/prisma.config'
import { updatePublishStatus } from './query/update'

const main = async () => {
  console.log('THIS IS QUERY OUTPUT')
  // * Here Function with query will be imported
  await updatePublishStatus(true, 1)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
