"use server"

import schema from "../../prisma/db";

export async function incrementThumbsUp(post) {

  await schema.post.update({
    where: {
      id: post.id
    },
    data: {
      likes: {
        increment: 1
      }
    }
  })
}