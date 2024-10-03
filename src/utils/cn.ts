import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
