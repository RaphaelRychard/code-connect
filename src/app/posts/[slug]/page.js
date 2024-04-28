
import Image from 'next/image';
import html from 'remark-html';
import { remark } from 'remark';

import logger from "@/logger";
import { Avatar } from '@/components/Avatar';

import style from './slug.module.css'

import schema from '../../../../prisma/db';
import { redirect } from 'next/navigation';

import { incrementThumbsUp, postComment } from '@/actions'
import { ThumbsUpButton } from '@/components/CardPost/ThumbsUpButton';
import { ModalComment } from '@/components/ModalComment';
import { CommentList } from '@/components/CommentList';


async function getPostBySlug(slug) {

  try {
    const post = await schema.post.findFirst({
      where: {
        slug
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true
          }
        }
      }
    })

    if (!post) {
      throw new Error(`Post com slug ${slug} não foi encontrado`)
    }

    const processedContent = await remark()
      .use(html)
      .process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml
    return post
  } catch (error) {
    logger.error('Falha ao objter o post com slug: ', {
      slug,
      error
    })
  }

  redirect('/not-found')
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug)

  const submitThumbsUp = incrementThumbsUp.bind(null, post);
  const submitComment = postComment.bind(null, post);

  return (
    <>
      <div className={style.container}>

        <article className={style.article}>
          <header className={style.header}>
            <figure className={style.figure}>
              <Image
                className={style.img}
                src={post.cover}
                width={961}
                height={300}
                title={post.slug}
              />
            </figure>
          </header>
          <section className={style.section}>
            <div>
              <h1 className={style.h1}>{post.title}</h1>
              <p>{post.body}</p>
            </div>

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
          </section>

        </article>
        <section>
          <header>
            <h2 className={style.h2}>Código:</h2>
          </header>
          <pre className={style.codeBlock} >
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
          </pre>
        </section>
        <div>
          <CommentList comments={post.comments} />
        </div>
      </div>
    </>
  )
}

export default PagePost
