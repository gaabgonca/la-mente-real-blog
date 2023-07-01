import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import { useState } from 'react'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  const [postNum, setPostNum] = useState<number>(4)
  const showPosts : Post[] = posts.slice(0,postNum < posts.length ? postNum : posts.length)

  const handleClick = () => {
    setPostNum(postNum + 4)
  }

  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        Más publicaciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-20 mb-32">
        {showPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {postNum< posts.length && <div className='flex flex-row w-full items-center justify-center mx-auto mb-8'>
      <a
      role="button"
      onClick={handleClick}
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0 dark:bg-white dark:text-black dark:border-black dark:hover:bg-zinc-400"
            >
              Mostrar más publicaciones
            </a>
      </div>}
    </section>
  )
}

export default MoreStories
