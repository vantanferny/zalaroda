const initializeEnvironment = () => {
  const connectionString = 'postgresql://anfernyvanta@localhost:5432/zalaroda_1'

  process.env['connectionString'] = connectionString
}

export default initializeEnvironment
