const slugifier = (unparsedWord: string): string => {
  const parsedWord: string = unparsedWord.replace(/\W+/g, '-').toLowerCase()

  return parsedWord
}

export default slugifier
