import logger from '@/logger';
import { CardPost } from '@/components/CardPost';
import './globals.css'
import Link from 'next/link';
import schema from '../../prisma/db';
import Search from '@/components/Search';

async function getAllPosts(page) {
  try {

    const perPage = 4;
    const skip = (page - 1) * perPage
    const totalItems = await schema.post.count()
    const totalPages = Math.ceil(totalItems / perPage)
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;
    const posts = await schema.post.findMany({
      take: perPage,
      skip,
      orderBy: { createdAt: 'desc' },
      include: {
        author: true
      }
    })

    return { data: posts, prev, next }
  } catch (error) {
    logger.error('Falha ao objter posts', { error })
    return { data: [], prev: null, next: null }
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
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
