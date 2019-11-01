import { useEffect } from 'react'

export const useOnClickOutside = (ref, callback) => {
  const refArr = Array.isArray(ref) ? ref : [ref]

  // prettier-ignore
  const handleClick = e => {
    if (
      refArr.every(
        refItem => refItem.current && !refItem.current.contains(e.target),
      )
    ) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
