import { useContext } from 'react'
import Container from './container'
import { EXAMPLE_PATH, FULL_NAME } from '../lib/constants'
import { OpenFormContext } from '../contexts/contact-form-context'

const Footer = () => {
  const {open, setOpen} = useContext(OpenFormContext)
  return (
    <footer className="bg-inherit border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className='flex-col '>
          <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-2 lg:mb-0 lg:pr-4">
            {FULL_NAME +", MD"}
          </h3>
          <h2 className='text-xl lg:text-[1.25rem] tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 '>
            Psiquiatra y psicoterapeuta con más de 20 años de experiencia clínica
          </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 lg:justify-end">
            <a
              onClick={() => setOpen(true)}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0 dark:bg-white dark:text-black dark:border-black dark:hover:bg-zinc-400 "
            >
              Cóntactame
            </a>
            <a
              href={`https://www.youtube.com/@lamentereal9620`}
              className="mx-3 font-bold hover:underline"
            >
              Visita mi canal de YouTube
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
