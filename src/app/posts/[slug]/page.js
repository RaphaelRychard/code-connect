
import Image from 'next/image';
import html from 'remark-html';
import { remark } from 'remark';

import logger from "@/logger";
import { Avatar } from '@/components/Avatar';

import style from './slug.module.css'
import search from './search.png';

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return {}
  }
  logger.info('Posts obtidos com sucesso')
  const data = await response.json()
  if (data.length == 0) {
    return {}
  }
  const post = data[0];
  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();
  post.markdown = contentHtml
  return post
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug)

  return (
    <>

      <div className={style.container}>
        <div className={style.container_search}>
          <div className={style.search}>
            <label htmlFor='search' className={style.searchIcon}>
              <Image src={search}
                width={'32px'}
                height={'32px'}
                title='Pesquisar'
              />
            </label>
            <input
              id='search'
              className={style.input}
              type="search"
              placeholder='Digite o que você procura
            '/>
          </div>
          <button className={style.button}>Buscar</button>
        </div>
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
      </div>
    </>
  )
}

export default PagePost
