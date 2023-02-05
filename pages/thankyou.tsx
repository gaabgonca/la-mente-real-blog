import Container from '../components/container'
import Header from '../components/header'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import { BLOG_TITLE } from '../lib/constants'
import Post from '../interfaces/post'
import Meta from '../components/meta'

const thankYouMessage = "Gracias por tu mensaje"

export default function ThankYou() {

    return (
        <div className='!h-screen fixed top-0 left-0 w-full'>
            <Meta/>
            <div className='container mx-auto h-full'>
            <Head>
                <title>{thankYouMessage}</title>
            </Head>
            <Intro/>
            
                <div className='w-full h-full flex flex-col align-center items-center justify-center'>
                    <h1 className='text-6xl  font-black  mb-2'>{thankYouMessage}</h1>
                    <h3 className='text-3xl mt-4'>Recuerda que eres importante </h3>
                    <h3 className="text-2xl md:text-3xl mt-2">Responderé tu consulta tan pronto como pueda</h3>
                    <p className='text-2xl italic mt-8 md:mt-16'>Si quieres seguir leyendo, puedes</p>
                    <Link href={"/"} className="mt-4">
                        <p 
                        className='text-xl mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0'>
                            Volver al inicio
                        </p>
                    </Link>
                    <div className='h-80'></div>
                </div>
            
            </div>
        
        </div>
    )
}