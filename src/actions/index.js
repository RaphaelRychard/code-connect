"use server"

import { revalidatePath } from "next/cache";
import schema from "../../prisma/db";

export async function incrementThumbsUp(post) {

  await new Promise ((resolve) => setTimeout (resolve, 3500))

  await schema.post.update({
    where: {
      id: post.id
    },
    data: {
      like: { 
        increment: 1
      }
    }
  })

  revalidatePath('/')
  revalidatePath(`/${post.slug}`)
}

export async function postComment(post, formData) {

  const author = await schema.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  await schema.comment.create({
    data: {
      text: formData.get('text'),
      authorId: author.id,
      postId: post.id
    }
  })

  revalidatePath('/')
  revalidatePath(`/${post.slug}`)
}

export async function postReply(post, parent, formData) {

  const author = await schema.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  await schema.comment.create({
    data: {
      text: formData.get('text'),
      authorId: author.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id
    }
  })

  revalidatePath(`/${post.slug}`)
}