"use server"

import { revalidatePath } from "next/cache";
import schema from "../../prisma/db";

export async function incrementThumbsUp(post) {

  // await new Promise ((resolve) => setTimeout (resolve, 3500))

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