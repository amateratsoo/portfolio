import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ReactNode } from 'react'

import typescriptLogo from '@/assets/svg/icons/typescript.svg'
import reactLogo from '@/assets/svg/icons/react.svg'
import tailwindcssLogo from '@/assets/svg/icons/tailwindcss.svg'
import framerMotionLogo from '@/assets/svg/icons/framer-motion.svg'
import figmaLogo from '@/assets/svg/icons/figma-no-bg.svg'

import portfolioPreview from '@/assets/projects-preview/portfolio-preview.png'
import spaceTourismPreview from '@/assets/projects-preview/space-tourism-preview.png'
import eWalletFractalPreview from '@/assets/projects-preview/e-wallet-fractal-preview.png'

interface Technologies {
  icon: string | StaticImport
  name: string
}
export interface ProjectInfo {
  preview: string | StaticImport
  title: string
  description: ReactNode
  githubUrl?: string
  liveUrl?: string
  technologies: Technologies[]
}

const baseGithubUrl = 'https://github.com/amateratsoo/'

export const projects: ProjectInfo[] = [
  {
    title: 'Portfolio',
    description: (
      <>
        <p>
          Welcome to my digital playground — part portfolio, part blog and part
          inspiration hub.
        </p>

        <br />

        <p>
          Here creativity meets development, allowing me to experiment , share
          ideas, and showcase my projects. Dive in & explore 🚀
        </p>
      </>
    ),
    preview: portfolioPreview,
    githubUrl: 'http://localhost:3000/',
    liveUrl: 'http://localhost:3000/',
    technologies: [
      { icon: reactLogo, name: 'React' },
      { icon: typescriptLogo, name: 'Typescript' },
      { icon: tailwindcssLogo, name: 'Tailwindcss' },
      { icon: framerMotionLogo, name: 'Framer Motion' }
    ]
  },
  {
    title: 'Space Tourism',
    description: (
      <>
        <p>Just imagine your new home...</p>
        <p>...in another planet.</p>

        <br />

        <p>
          Get ready to leave earth 🌍. An adventure awaits for you. This app
          let&apos;s you explore some of the wonders off the outer space with
          our excellent crew as companion.
        </p>
      </>
    ),
    preview: spaceTourismPreview,
    githubUrl: `${baseGithubUrl}/space-tourism-fem`,
    liveUrl: 'https://space-tourism-101.vercel.app/',
    technologies: [
      { icon: reactLogo, name: 'React' },
      { icon: tailwindcssLogo, name: 'Tailwindcss' },
      { icon: figmaLogo, name: 'Figma' }
    ]
  },
  {
    title: 'More soon',
    description: (
      <>
        <p>
          Right now I&apos;m busy with college and some personal projects, but i
          will add more projects here very soon.
        </p>

        <br />

        <p>Stay tuned 🥳</p>
      </>
    ),
    preview: eWalletFractalPreview,
    technologies: []
  }
]
