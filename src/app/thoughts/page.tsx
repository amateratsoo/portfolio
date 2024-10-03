import * as motion from 'framer-motion/client'

import { Blockquote } from '@/components/thoughts/blockquote'
import { ImageWithLink } from '@/components/thoughts/image-with-link'
import { cn } from '@/utils/cn'
import { ImageOffIcon } from 'lucide-react'

export interface Quotes {
  text: string
  author?: string
  citeSource?: string
}

interface AstronomyPictureOfTheDay {
  caption: string
  source: string
  link: string
}

interface AstronomyPictureOfTheDayEndpoint {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

// for now i'm capping the limit to two per array
const quotes: Quotes[][] = [
  [
    {
      author: 'Confúcio',
      text: 'Transportai um punhado de terra todos os dias e fareis uma montanha.'
    },
    {
      author: 'Confúcio',
      text: 'Aja antes de falar e, portanto, fale de acordo com os seus atos.'
    }
  ],
  [
    {
      text: 'Daria tudo que sei pela metade do que ignoro.',
      author: 'René Descartes'
    }
  ]
]

const motionInitial = {
  translateY: 10,
  opacity: 0
}

const motionAnimation = {
  translateY: 0,
  opacity: 1
}

const motionViewport = {
  once: true
}

const motionTransitions = {
  ease: 'easeInOut'
}

const astronomyPictureOfTheDayFallback: AstronomyPictureOfTheDay = {
  caption: '“Cosmic Cliffs” in the Carina Nebula',
  source: 'https://stsci-opo.org/STScI-01G77PKYA4T05YKJ3EDQ36NZCX.png',
  link: 'https://webbtelescope.org/contents/media/images/2022/031/01G77PKB8NKR7S8Z6HBXMYATGJ'
}

export default async function Page() {
  async function getTodayAstronomyPicture() {
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`

    const response = await fetch(endpoint, { cache: 'no-store' })

    if (!response.ok) {
      return astronomyPictureOfTheDayFallback
    }

    const { hdurl, title, url } =
      (await response.json()) as AstronomyPictureOfTheDayEndpoint

    const astronomyPictureOfTheDay = {
      caption: title,
      source: hdurl,
      link: 'https://apod.nasa.gov/apod'
    }

    return astronomyPictureOfTheDay
  }

  const astronomyPictureOfTheDay = await getTodayAstronomyPicture()

  return (
    <main className='w-screen flex items-center justify-center p-2 md:py-4 lg:p-4 lg:py-12-- lg:px-24-- min-h-screen text-text-primary bg-background-primary'>
      {/* 
        core elements, don't pretend to change them 
        will be displayed as a bento grid
      */}
      <div className='flex gap-2 flex-col w-screen h-fit items-center justify-center md:px-2 lg:px-0'>
        <motion.div
          className='h-fit md:h-80 w-full flex flex-col md:flex-row gap-2'
          initial={motionInitial}
          whileInView={motionAnimation}
          viewport={motionViewport}
          transition={motionTransitions}
        >
          <Blockquote
            author='Isaías 40:26'
            citeSource='https://www.jw.org/pt/biblioteca/biblia/nwt/livros/Isa%C3%ADas/40/'
          >
            Ergam os olhos para o céu e vejam. Quem é que criou estas coisas?
            Foi Aquele que as faz sair como um exército, por número; Ele
            chama-as a todas por nome. Por causa da sua imensa energia dinâmica
            e do seu atemorizante poder, Não falta nem sequer uma delas.
          </Blockquote>

          <ImageWithLink
            caption='Pillars of Creation'
            link='https://en.wikipedia.org/wiki/Pillars_of_Creation'
            altText='nasa image of the day'
            source='https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg?w=1041'
            className='aspect-auto lg:aspect-square md:w-52 lg:w-auto'
          />
        </motion.div>

        <motion.div
          className='h-fit flex gap-2 w-full flex-col md:flex-row'
          initial={motionInitial}
          whileInView={motionAnimation}
          viewport={motionViewport}
          transition={{
            ...motionTransitions,
            delay: 0.2
          }}
        >
          <article className='w-full md:w-[46rem] flex'>
            <Blockquote author='Friedrich Nietzsche'>
              He who has a why to live for can bear almost any how.
            </Blockquote>
          </article>

          <div className='flex flex-col gap-2'>
            <article>
              <Blockquote author='Will Durant'>
                We are what we repeatedly do. Excellence, then, is not an act,
                but a habit.
              </Blockquote>
            </article>

            <article>
              <Blockquote author='Albert Camus'>
                The struggle itself toward the heights is enough to fill a man's
                heart. One must imagine Sisyphus happy.
              </Blockquote>
            </article>
          </div>
        </motion.div>

        <motion.div
          className='h-fit flex gap-2 w-full flex-col md:flex-row'
          initial={motionInitial}
          whileInView={motionAnimation}
          viewport={motionViewport}
          transition={{
            ...motionTransitions,
            delay: 0.4
          }}
        >
          <article className='w-fit md:w-[60rem] flex flex-col-reverse gap-2'>
            <article
              className={cn(
                'sm:aspect-square w-full bg-background-secondary text-accent-color/60 border border-background-stroke rounded-md p-8 flex flex-col items-center justify-center text-2xl font-sans font-normal'
              )}
            >
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⡄⡀⠀⠀
              </span>
              <span>⠀⠀⣼⣿⠇⠀⠀⠈⢿⣿⣦⠀</span>
              <span>⠀⢰⣿⣿⠀⠀⠀⠀⠀⢿⣿⡇</span>
              <span>⠀⠸⣿⣿⣷⣶⣿⣿⣿⣿⣿⡇</span>
              <span>⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⡆</span>
              <span>⠀⠀⡾⢿⣿⣿⠛⢿⣿⣿⣿⣿</span>
              <span>⠀⠀⢷⡈⣿⣿⣆⢘⣿⣿⣿⡟</span>
              <span>⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⡟⠁</span>
              <span>⠀⣀⡄⣰⣿⣿⣿⣿⣿⣿⣿⠀</span>
              <span>⠈⠛⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇</span>
              <span>⠀⠀⠈⠿⣿⣿⣿⣿⣿⣿⣿⡇</span>
              <span>⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⠇</span>
              <span>⠀⠀⠀⠀⠸⣿⠁⠙⠃⢿⠟⠀</span>
            </article>

            <Blockquote author='Hollow Knight'>
              Be the person you’d like to meet. If our lives are but a spark in
              the eye of gods, then let us blind them at least once.
            </Blockquote>
          </article>

          <div
            className={cn('flex flex-col gap-2', {
              'w-full': astronomyPictureOfTheDay
            })}
          >
            {astronomyPictureOfTheDay.source ? (
              <ImageWithLink
                className='aspect-auto'
                altText="nasa's astronomy image of the day"
                caption={astronomyPictureOfTheDay?.caption}
                source={astronomyPictureOfTheDay?.source}
                link={astronomyPictureOfTheDay?.link}
              />
            ) : (
              <div className='h-96 w-full md:w-full md:h-full flex items-center justify-center animate-pulse border border-background-stroke rounded-md self-stretch'>
                <ImageOffIcon className='size-8 text-text-secondary' />
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className='flex flex-col gap-2'
          initial={motionInitial}
          whileInView={motionAnimation}
          viewport={motionViewport}
          transition={{
            ...motionTransitions,
            delay: 0.3
          }}
        >
          {quotes.map((q, index) => {
            return (
              <div
                className='h-fit flex gap-2 w-full flex-col sm:flex-row'
                key={index}
              >
                {q.map(({ text, author, citeSource }, index) => {
                  return (
                    <Blockquote
                      key={index}
                      author={author}
                      citeSource={citeSource}
                    >
                      {text}
                    </Blockquote>
                  )
                })}
              </div>
            )
          })}
        </motion.div>
      </div>
    </main>
  )
}
