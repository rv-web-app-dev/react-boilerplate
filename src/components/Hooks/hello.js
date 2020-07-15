import React from 'react'

const Hello = () => {
  React.useEffect(() => {
    return () => {
      console.log('cleanup!! when unmounting..')
    }
  }, [])

  return (
    <span> Hello </span>
  )
}

export default Hello
