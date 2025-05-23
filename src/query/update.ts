import { prisma } from '@/config/prisma.config'
import util from 'util'

export async function updatePublishStatus(status: boolean, id: number) {
  const post = await prisma.post.update({
    where: { id },
    data: { published: status },
  })
  console.log('Updated Post \n', util.inspect(post, { depth: null, colors: true }))
  return post
}
