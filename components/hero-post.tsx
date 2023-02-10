import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import ReadMore from './read-more'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className='lg:grid lg:grid-cols-2 lg:gap-x-16 lg:-gap-x-8 items-center'>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} hero />
      </div>
      <div className="md:flex md:flex-col  md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className='mb-8'>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed">{excerpt + " [...]"}</p>
          <div className='flex flex-row w-full justify-end pb-4'>          
            <ReadMore slug={slug} />
            </div>

          <Avatar name={author.name} picture={author.picture} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
