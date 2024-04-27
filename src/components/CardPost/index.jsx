import style from './cardpost.module.css'
import Image from "next/image"
import { Avatar } from "../Avatar"
import Link from 'next/link'

import { incrementThumbsUp, postComment } from '@/actions'
import { ThumbsUpButton } from './ThumbsUpButton'
import { ModalComment } from '../ModalComment'

export const CardPost = ({ post }) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    <div className={style.cardEffects}>
      <article className={style.card}>
        <header className={style.header} >
          <figure className={style.header.figure}>
            <Image
              src={post.cover}
              width={438}
              height={133}
              alt={post.slug}
              title={post.slug}
            />
          </figure>
        </header>
        <section>
          <h2 className={style.body}>{post.title}</h2>
          <p className={style.body}>{post.body}</p>
          <div className={style.link}>
            <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
          </div>
        </section>
        <footer className={style.footer}>
          <div className={style.footer_container}>
            <form action={submitThumbsUp}>
              <ThumbsUpButton />
              <p style={{ color: 'white' }}>
                {post.like}
              </p>
            </form>
            <div>
              <ModalComment action={submitComment} />
              <p>
                {post.comments.length}
              </p>
            </div>
          </div>
          <Avatar
            imageSrc={post.author.avatar}
            name={post.author.username}
          />
        </footer>
      </article>
    </div>
  )
}