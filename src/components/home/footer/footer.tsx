import { cn } from '@/utils/cn'

export function Footer() {
  return (
    <footer
      className={cn(
        'w-screen h-fit flex justify-between px-4 bg-background-secondary text-text-secondary text-sm py-5 font-fancy'
      )}
    >
      <span> &copy; {new Date().getFullYear()} Jossani da Cruz</span>

      <span>Built with 💖</span>
    </footer>
  )
}
