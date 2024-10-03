'use client'

import { SparkleButton } from '@/components/sparkle-button'

export function CTA() {
  return (
    <section className='overflow-hidden relative flex h-fit w-screen flex-col items-center pb-48'>
      <div className='w-full h-full absolute top-0 left-0 bg-background-secondary -z-10' />
      <div className='pt-16 mx-6 sm:mx-0 flex flex-col gap-6'>
        <h2 className='font-sans text-text-primary text-5xl py-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
          Now it's your turn...
        </h2>

        {/* <div className='rounded-full p-[0.10rem] bg-gradient-to-r from-accent-color/25 to-[#666666] active:scale-95 transition-transform w-fit'>
          <button
            className='rounded-full p-4 text-white'
            style={{ backgroundColor: tertiary }}
          >
            let's build together 🚀
          </button>
        </div> */}

        <div className='w-fit shadow-[0px_10px_38px_-10px_rgba(253, 186, 116, 0.21),_0px_10px_20px_-15px_rgba(253, 186, 116, 0.21)'>
          <SparkleButton>
            <a
              href='mailto:jossanidacruz2@gmail.com'
              target='_blank'
              className={SparkleButton.ClassName}
              rel='noopener, noreferrer'
            >
              <SparkleButton.Spark />
              <SparkleButton.Backdrop />
              <SparkleButton.Text>
                <span className='text-white font-mono text-lg'>
                  let's build together 🚀
                </span>
              </SparkleButton.Text>
            </a>
          </SparkleButton>
        </div>
      </div>
    </section>
  )
}
