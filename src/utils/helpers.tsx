export const colorfyLastWord = (value: string) => {
  const splitValue = value.split(' ')
  const fistWords = splitValue.slice(0, splitValue.length - 1).join(' ')
  const lastWord = splitValue[splitValue.length - 1]

  return (
    <span>
      {fistWords}{' '}
      <strong className="bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent">
        {lastWord}
      </strong>
    </span>
  )
}

export const colorfyFirstWord = (value: string) => {
  const splitValue = value.split(' ')
  const fistWord = splitValue[0]
  const lastWords = splitValue.slice(1, splitValue.length).join(' ')

  return (
    <span>
      <strong className="bg-gradient-to-tr from-pink-400 to-purple-500 bg-clip-text text-transparent">
        {fistWord}
      </strong>{' '}
      {lastWords}
    </span>
  )
}
