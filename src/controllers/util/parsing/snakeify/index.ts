const snakeify = (rawObject: object): any => {
  let parsedObject: any = {}

  for (const camelKey in rawObject) {
    const snakeKey = camelToSnake(camelKey)

    parsedObject[snakeKey] = rawObject[camelKey]
  }

  return parsedObject
}

const camelToSnake = (camel: string) => {
  const snake: string = camel.replace(
    /([A-Z][a-z])/g,
    (group) => "-".concat(group.toLowerCase())
  )

  return snake
}

export default snakeify
