const camelify = (rawObject: object): any => {
  let parsedObject: any = {}

  for (const snakeKey in rawObject) {
    const camelKey = snakeToCamel(snakeKey)

    parsedObject[camelKey] = rawObject[snakeKey]
  }

  return parsedObject
}

const snakeToCamel = (snake: string) => {
  const camel: string = snake.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase().replace('_', '')
  )

  return camel
}

export default camelify
