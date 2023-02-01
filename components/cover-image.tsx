import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  hero?: boolean
}

const CoverImage = ({ title, src, slug, hero = false}: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm  mx-auto', {
        'hover:shadow-lg transition-shadow duration-200 w-full object-cover': slug,
        'md:w-1/2 ' : !slug,
        'h-full': hero && slug,
        'h-80': !hero && slug
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
