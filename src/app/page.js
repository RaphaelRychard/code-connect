import logger from '@/logger';
import { CardPost } from '@/components/CardPost';

import './globals.css'
import Link from 'next/link';

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal');
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <>
      <main>
        <div className="main-container">
          {posts.map(post => <CardPost key={post.id} post={post} />)}
        </div>
        <div className='div-links'>
          {prev && <Link className='links_prev' href={`/?page=${prev}`}>Pagína Enterior</Link>}
          {next && <Link className='links_next' href={`/?page=${next}`}>Proxima Pagína</Link>}
        </div>
      </main>
    </>
  );
}
