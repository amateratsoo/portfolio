import Image from 'next/image'

import { auth } from '@/lib/auth'

import { SubmitButton } from '@/components/guestbook/form/submit-button'
import { FormOverlay } from '@/components/guestbook/form/form-overlay'
import { UserInfo } from '@/components/guestbook/form/user-info'

import { getAllComments, postComment } from '@/actions'
import { LikeButton } from '@/components/guestbook/comment/like-button'
import { prisma } from '@/lib/prisma'

export default async function Page() {
  const session = await auth()

  // await prisma.userLikedComments.deleteMany()
  // await prisma.comment.deleteMany()
  // await prisma.user.deleteMany()

  const comments = await getAllComments()

  return (
    <main className='w-screen min-h-screen bg-background-primary flex flex-col items-center relative'>
      <div className='absolute top-0 left-0 flex items-stretch justify-content-stretch stroke-text-secondary/25-- z-0 w-screen overflow-hidden-- h-96'>
        <div className='relative w-full h-full'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 3126 1885'
            preserveAspectRatio='xMidYMid slice'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute top-0 left-0 w-full h-96'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M305.8 1.09859H-6.93266V313.831H273.401L305.8 281.432V1.09859ZM339.063 313.831L307.082 281.85V1.09859H619.815V313.831H339.063ZM307.082 346.618L338.587 315.113H619.815V627.846H307.082V346.618ZM273.877 315.113L305.8 347.036V627.846H-6.93266V315.113H273.877ZM-8.03125 0V314.015V314.93V628.028V628.944V942.043V942.958V1256.06V1256.97V1570.07V1570.99V1885H305.983H306.899H619.997H620.913H934.012H934.927H1248.03H1248.94H1562.04H1562.96H1876.05H1876.97H2190.07H2190.98H2504.08H2505H2818.1H2819.01H3133.03L3133.03 1570.99V1256.97V1256.06V942.043V628.944V314.93V314.015V0H2819.01H2818.1H2505H2504.08H2190.98H2190.07H1876.97H1876.05H1562.96H1562.04H1248.94H1248.03H934.927H934.012H620.913H619.997H306.899H305.983H-8.03125ZM621.096 1.09859H933.828V313.831H621.096V1.09859ZM1247.84 1.09859H935.11V313.831H1247.84V1.09859ZM1249.12 1.09859H1561.86V313.831H1249.12V1.09859ZM1875.87 1.09859H1563.14V313.831H1875.87V1.09859ZM1877.15 1.09859H2189.89V313.831H1877.15V1.09859ZM2503.9 1.09859H2191.17V313.831H2503.9V1.09859ZM2505.18 1.09859H2817.91V313.831H2505.18V1.09859ZM3131.93 1.09859H2819.2V313.831H3131.93V1.09859ZM621.096 315.113H933.828V627.846H621.096V315.113ZM1247.84 315.113H935.11V627.846H1216.39L1247.84 596.389V315.113ZM1280.08 627.846L1249.12 596.893V315.113H1561.86V627.846H1280.08ZM1249.12 661.575L1281.47 629.234L1281.36 629.127H1561.86V941.859H1249.12V661.575ZM1215.11 629.127L1215 629.234L1247.84 662.079V941.859H935.11V629.127H1215.11ZM1875.87 315.113H1563.14V627.846H1875.87V315.113ZM1877.15 315.113H2189.89V627.846H1877.15V315.113ZM2503.9 315.113H2191.17V627.846H2503.9V315.113ZM2505.18 315.113H2817.91V541.084L2817.38 541.614L2731.15 627.846H2505.18V315.113ZM2729.87 629.127H2505.18V911.05L2506.23 910L2538.09 941.859H2817.92V717.385L2817.38 716.854L2730.61 630.083L2729.76 629.234L2729.87 629.127ZM2817.92 715.688L2731.46 629.234L2731.57 629.127H2785.11L2785 629.234L2817.92 662.151V715.688ZM2819.2 716.738V941.859H3131.93V629.127H2906.59L2906.7 629.234L2905.85 630.083L2819.2 716.738ZM2904.9 629.127L2905 629.234L2819.2 715.041V661.504L2851.47 629.234L2851.36 629.127H2904.9ZM2905.31 627.846H3131.93V315.113H2819.2V541.731L2905.31 627.846ZM2819.2 543.428L2903.61 627.846H2850.08L2819.2 596.965V543.428ZM2817.91 542.781L2732.85 627.846H2786.39L2817.91 596.318V542.781ZM2505.18 975.417L2506.23 976.468L2539.47 943.234L2539.37 943.141H2817.91V1255.87H2505.18V975.417ZM2473.09 943.141L2473 943.234L2503.9 974.136V1255.87H2191.17V943.141H2473.09ZM2503.9 912.332L2474.37 941.859H2191.17V629.127H2503.9V912.332ZM-6.93266 629.127H305.8V941.859H-6.93266V629.127ZM619.815 629.127H307.082V941.859H619.815V629.127ZM621.096 629.127H933.828V941.859H621.096V629.127ZM1875.87 629.127H1563.14V941.859H1875.87V629.127ZM1877.15 629.127H2189.89V941.859H1877.15V629.127ZM-6.93266 943.141H305.8V1255.87H-6.93266V943.141ZM619.815 943.141H307.082V1255.87H533.405L532.998 1255.47L533.847 1254.62L619.815 1168.65V943.141ZM619.815 1170.35L534.695 1255.47L535.102 1255.87H588.639L588.232 1255.47L619.815 1223.89V1170.35ZM621.096 1222.6V1169.07L621.466 1168.7L708.237 1255.47L707.831 1255.87H654.294L654.701 1255.47L621.466 1222.23L621.096 1222.6ZM621.096 1288.33L621.466 1288.7L653.012 1257.16H706.549L621.466 1342.24L621.096 1341.87V1288.33ZM589.921 1257.16L619.815 1287.05V1340.59L536.384 1257.16H589.921ZM534.687 1257.16H307.082V1569.89H619.815V1342.28L534.687 1257.16ZM621.096 1343.56V1569.89H933.828V1257.16H708.246L622.315 1343.09L621.466 1343.94L621.096 1343.56ZM709.528 1255.87H933.828V943.141H621.096V1167.37L621.466 1167L622.315 1167.85L709.086 1254.62L709.934 1255.47L709.528 1255.87ZM1247.84 943.141H935.11V1255.87H1247.84V943.141ZM1249.12 943.141H1561.86V1255.87H1249.12V943.141ZM1875.87 943.141H1563.14V1255.87H1875.87V943.141ZM1877.15 943.141H2189.89V1255.87H1877.15V943.141ZM3131.93 943.141H2819.2V1255.87H3131.93V943.141ZM-6.93266 1257.16H305.8V1569.89H-6.93266V1257.16ZM1247.84 1257.16H935.11V1569.89H1247.84V1257.16ZM1249.12 1257.16H1561.86V1569.89H1249.12V1257.16ZM1875.87 1257.16H1563.14V1569.89H1875.87V1257.16ZM1877.15 1257.16H2189.89V1569.89H1877.15V1257.16ZM2503.9 1257.16H2191.17V1569.89H2503.9V1257.16ZM2505.18 1257.16H2817.91V1569.89H2505.18V1257.16ZM3131.93 1257.16H2819.2V1569.89H3131.93V1257.16ZM-6.93266 1571.17H305.8V1883.9H-6.93266V1571.17ZM619.815 1571.17H307.082V1883.9H619.815V1571.17ZM621.096 1571.17H933.828V1883.9H621.096V1571.17ZM1247.84 1571.17H935.11V1883.9H1247.84V1571.17ZM1249.12 1571.17H1561.86V1883.9H1249.12V1571.17ZM1875.87 1571.17H1563.14V1883.9H1875.87V1571.17ZM1877.15 1571.17H2189.89V1883.9H1877.15V1571.17ZM2503.9 1571.17H2191.17V1883.9H2503.9V1571.17ZM2505.18 1571.17H2817.91V1883.9H2505.18V1571.17ZM3131.93 1571.17H2819.2V1883.9H3131.93V1571.17Z'
              fill='url(#paint0_radial_174_1693)'
              className='fill-background-primary/65'
              fill-opacity='0.6'
            />
            <defs>
              <radialGradient
                id='paint0_radial_174_1693'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(1562.5 -1058) rotate(90) scale(2705.5 4508.29)'
              >
                <stop />
                <stop offset='1' stop-opacity='0.67' />
              </radialGradient>
            </defs>
          </svg>
          <div className='w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-background-tertiary via-background-tertiary to-transparent z-10' />
        </div>
      </div>
      <div className='pt-16 min-[478px]:text-center text-start max-[376px]:px-5 px-6 z-50'>
        <h1 className='font-sans text-text-primary text-5xl py-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
          Welcome to my <span className='font-fancy italic'>guestbook</span>
        </h1>
      </div>

      <div className='z-50 w-fit flex flex-col items-center'>
        <FormOverlay session={session}>
          <form className='pt-3 pl-2' action={postComment}>
            <label htmlFor='comment' className='flex gap-2 items-center w-fit'>
              <span className='text-text-tertiary text-base'>
                commenting as{' '}
              </span>
              <UserInfo session={session} />
            </label>
            <input
              className='mt-2 w-full bg-background-secondary rounded-md p-3 text-text-primary placeholder:text-sm placeholder:italic placeholder:font-fancy placeholder:text-text-secondary border border-background-stroke'
              required
              type='text'
              id='comment'
              name='comment'
              placeholder='write something nice...'
              disabled={!session}
            />
            <SubmitButton isDisabled={!session} />
          </form>
        </FormOverlay>

        <section className='pt-8 max-[376px]:w-[22rem] w-full px-3'>
          <div className='w-full flex items-center justify-between'>
            <h2 className='font-sans text-text-primary text-base py-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
              Comments
            </h2>
            <div className='flex flex-col'>
              {/* <span className='text-text-secondary'>filter by</span> */}
              {/* <span>
                <button>date</button>
                <button>hearts</button>
              </span> */}
            </div>
          </div>

          <div className='w-full flex flex-col gap-2 items-center'>
            {comments.length > 0 ? (
              comments.map(({ text, author, createdAt, likedByUser, id }) => (
                <article
                  key={id}
                  className='bg-transparent border-t first:border-t-0 border-t-background-tertiary p-5 w-[23rem] sm:w-[32rem]'
                >
                  <div className='flex items-center gap-2 relative'>
                    <div className='size-9 relative rounded-full overflow-hidden'>
                      <Image
                        src={author.avatar}
                        alt=''
                        className='overflow-hidden size-9 rounded-full'
                        fill
                      />
                    </div>
                    <span className='text-text-tertiary font-fancy font-medium text-md'>
                      {author.name}
                      <div className='text-sm text-text-secondary'>
                        {JSON.stringify(
                          createdAt.toLocaleDateString()
                        ).replaceAll('"', '')}
                      </div>
                    </span>
                  </div>
                  <div className='mt-3 text-text-primary'>{text}</div>
                  <LikeButton
                    commentId={id}
                    emailOfUsersThatLiked={
                      likedByUser.length > 0
                        ? likedByUser.map(email => email.userEmail)
                        : []
                    }
                    session={session}
                  />
                </article>
              ))
            ) : (
              <div className='w-full h-full text-center flex items-center justify-center text-text-secondary font-fancy py-20'>
                No comments yet. <br />
                you can be first to comment 🪄
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
