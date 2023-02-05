import { FULL_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl xl:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        La mente real
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Blog del especialista en salud mental&nbsp;<br className='md:hidden'/><strong>{FULL_NAME}</strong>
      </h4>
    </section>
  )
}

export default Intro
