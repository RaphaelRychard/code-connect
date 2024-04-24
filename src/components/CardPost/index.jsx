import style from './cardpost.module.css'

import Image from "next/image"
import { Avatar } from "../Avatar"
import Link from 'next/link'

export const CardPost = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={style.link}>
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
        </section>
        <footer className={style.footer}>
        <Avatar
            imageSrc={post.author.avatar}
            name={post.author.username}
          />
          
        </footer>
      </article>
    </Link>
  )
}