import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import avatar from '@/assets/img/avatars/avatar.jpg'
import notionLikeAvatar1 from '@/assets/img/avatars/notion-like-avatar-1.png'
import notionLikeAvatar2 from '@/assets/img/avatars/notion-like-avatar-2.png'
import notionLikeAvatar3 from '@/assets/img/avatars/notion-like-avatar-3.png'
import notionLikeAvatar4 from '@/assets/img/avatars/notion-like-avatar-4.png'
import notionLikeAvatar5 from '@/assets/img/avatars/notion-like-avatar-5.png'
import notionLikeAvatar6 from '@/assets/img/avatars/notion-like-avatar-6.png'
import notionLikeAvatar7 from '@/assets/img/avatars/notion-like-avatar-7.png'
import notionLikeAvatar8 from '@/assets/img/avatars/notion-like-avatar-8.png'
import notionLikeAvatar9 from '@/assets/img/avatars/notion-like-avatar-9.png'
import notionLikeAvatar10 from '@/assets/img/avatars/notion-like-avatar-10.png'

export interface Review {
  userAvatar: StaticImport | string
  username: string
  comment: string
}

export const reviews: Review[] = [
  {
    userAvatar: notionLikeAvatar1,
    username: 'Alicia Ramirez',
    comment:
      'Working with Jossani felt like a dream. Everything was seamless, and the project turned out better than I could have imagined. My business has been thriving since!'
  },
  {
    userAvatar: notionLikeAvatar2,
    username: 'Marcus Williams',
    comment:
      "I don't know how, but Jossani managed to turn my chaotic vision into something incredible. It’s like magic!"
  },
  {
    userAvatar: notionLikeAvatar3,
    username: 'Helena Johansson',
    comment:
      'As a designer myself, I’m very picky about who I work with. Jossani exceeded every expectation. Attention to detail, creativity, and communication were top-notch!'
  },
  {
    userAvatar: notionLikeAvatar4,
    username: 'Keith Martin',
    comment:
      'Finally, someone who delivers! With Jossani, we got everything done in record time, and it was better than we expected. Highly recommend!'
  },
  {
    userAvatar: notionLikeAvatar5,
    username: 'Gregory Fenton',
    comment:
      'Jossani promised results, and boy did they deliver. I still don’t know how they did it. 10/10 would hire again.'
  },
  {
    userAvatar: notionLikeAvatar6,
    username: 'ChatGPT (Yes, me!)',
    comment:
      'As an AI, I’ve seen a lot of work, but this... this was exceptional. I highly recommend Jossani’s services for all your digital needs. Trust me, I know stuff. 😎'
  },
  {
    userAvatar: notionLikeAvatar7,
    username: 'Samantha Lee',
    comment:
      'I didn’t even know what I wanted until Jossani showed me. Now, I have a brand that I’m proud of. Thank you!'
  },
  {
    userAvatar: avatar,
    username: 'Jossani da Cruz',
    comment:
      'please note that some reviews are fake data, but with your help we can change that'
  },
  {
    userAvatar: notionLikeAvatar8,
    username: 'David Anderson',
    comment:
      "I started out with no clue, but after working with Jossani, my brand looks like it belongs in a Hollywood movie. Seriously, I'm now the Ryan Gosling of startups. 🔥"
  },
  {
    userAvatar: notionLikeAvatar3,
    username: 'Probably you 🫵',
    comment:
      'If you’re on the fence, don’t be. Jossani is the real deal. I saw results almost immediately after launch!'
  },
  {
    userAvatar: notionLikeAvatar9,
    username: 'Jhonny Bravo',
    comment:
      "Hey, I'm usually the one getting all the attention, but Jossani stole the show. Everything’s looking pretty, pretty cool!"
  },
  {
    userAvatar: notionLikeAvatar10,
    username: 'Thorstein Baldursson',
    comment:
      'Jossani took my Viking-themed blog to a whole new level. Now, it’s as epic as a saga! Odin himself would be proud.'
  },
  {
    userAvatar: avatar,
    username: 'Jossani da Cruz',
    comment: 'this guy seems really nice! 🤩'
  },
  {
    userAvatar: notionLikeAvatar9,
    username: 'Me',
    comment: 'This could be you. Just imagine 🚀'
  },
  {
    userAvatar: notionLikeAvatar10,
    username: 'ChatGPT',
    comment: 'This review is fake, but the he seems very competent :)'
  }
]
