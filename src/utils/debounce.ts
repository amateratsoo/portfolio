export function debounce<T>({
  debounceTimeInMs,
  callback
}: {
  debounceTimeInMs: number
  callback: () => T
}) {
  let timeout: NodeJS.Timeout

  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => callback(), debounceTimeInMs)
}
