import chalk from 'chalk'
import { prisma } from './config/prisma.config'
import { updatePublishStatus } from './query/update'

prisma.$on('query', e => {
  console.group(chalk.bgBlue.white.bold('📦 Prisma Query Log'))

  console.log(`${chalk.yellow('🕒 Timestamp:')} ${chalk.white(e.timestamp)}`)
  console.log(`${chalk.green('📜 Query:')} ${chalk.white(e.query)}`)
  console.log(`${chalk.cyan('⚡ Duration:')} ${chalk.white(`${e.duration} ms`)}`)

  console.groupEnd()
  console.log(chalk.gray('-'.repeat(60)))
})

const main = async () => {
  // * Here Function with query will be imported
  await updatePublishStatus(true, 1)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.group(chalk.bgRed.white.bold('❌ Error'))
    console.error(e)
    console.groupEnd()
    await prisma.$disconnect()
    process.exit(1)
  })
