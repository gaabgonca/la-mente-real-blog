
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import ContactMe from '../../components/contact-me'
import Link from 'next/link'
import { ShareButtonsRow } from '../../components/ShareButtonsRow'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const BASE_URL = "https://lamentereal.com/"
const POSTS_URL = "https://www.lamentereal.com/posts/"

export default function Post({ post, morePosts, preview }: Props)  {

  const router = useRouter()

  const absoluteOgImageUrl = `${BASE_URL}${post.ogImage.url}`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32 md:px-72">
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={absoluteOgImageUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:url" content={POSTS_URL + post.slug} />
                <meta property="og:description" content={post.excerpt} />
                
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              {post.contact && (<ContactMe intro= {post.contact}/>)}
              <ShareButtonsRow postUrl={POSTS_URL + post.slug} />
              <div className='row flex items-center justify-center w-full'>
              <Link
              href="/"
              className="mt-20 mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0 dark:bg-white dark:text-black dark:border-black dark:hover:bg-zinc-400 "
            >
              Ver más artículos
            </Link>
            </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'contact'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
