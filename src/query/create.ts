import { prisma } from '@/config/prisma.config'

export async function createUser() {
  const result = await prisma.user.create({
    data: {
      name: 'Sajib',
      email: 'sajib@test.io',
      posts: {
        create: { title: 'Hello Sajib!' },
      },
      profile: {
        create: { bio: 'I like cricket' },
      },
    },
  })
  console.log('User created', result)
}
