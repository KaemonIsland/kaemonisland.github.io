import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const useAlternatingText = (text = [], speed = 3000) => {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex(textIndex => {
        const newIndex = textIndex + 1
        if (newIndex > text.length - 1) {
          return 0
        }
        return newIndex
      })
    }, speed)

    return () => {
      clearInterval(intervalId)
    }
  }, [text, speed])

  return [text[textIndex]]
}

useAlternatingText.propTypes = {
  text: PropTypes.array,
  speed: PropTypes.number,
}
