import { prisma } from '@/config/prisma.config'

export async function updatePublishStatus(status: boolean, id: number) {
  const post = await prisma.post.update({
    where: { id },
    data: { published: status },
  })
  console.log('Updated Post \n', post)
  return post
}
