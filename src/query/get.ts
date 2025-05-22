import { prisma } from '@/config/prisma.config'

export async function getAllPosts() {
  const result = await prisma.post.findMany()
  console.log('Posts \n', result)
}

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.dir(allUsers, { depth: null })
}
