import { useSwapText } from '@/hooks/use-swap-text'

export const helloInDifferentLanguages = [
  'Hello', // English
  'Hola', // Spanish
  'Bonjour', // French
  'Ciao', // Italian
  'Hallo', // German
  'Olá', // Portuguese
  'Hej', // Swedish
  'Hei', // Finnish
  'Aloha', // Hawaiian
  '안녕하세요', // Korean (Annyeonghaseyo)
  '你好', // Chinese (Nǐ hǎo)
  'こんにちは', // Japanese (Konnichiwa)
  'Здравствуйте', // Russian (Zdravstvuyte)
  'مرحبا', // Arabic (Marhaba)
  'नमस्ते', // Hindi (Namaste)
  'Shalom', // Hebrew
  'Szia', // Hungarian
  'Sawubona', // Zulu
  'Salam', // Persian
  'Merhaba', // Turkish
  'Hallo', // Dutch
  'Selamat', // Malay/Indonesian
  'Tere', // Estonian
  'Halo', // Filipino (Tagalog)
  'Sawadee' // Thai
]

export const intervalTimeInMs = 100

export function Greetings() {
  const text = useSwapText({
    listOfTextToSwap: helloInDifferentLanguages,
    intervalTimeInMs
  })

  return (
    <section className='w-screen h-screen flex items-center justify-center font-fancy  text-5xl sm:text-6xl font-semibold text-center'>
      <p>{text} 👋</p>
    </section>
  )
}
