import { Pool } from 'pg'

import { QueryResult, ParsedUserSignUpInput } from '../../types'

const create = async (parsedUserInput: ParsedUserSignUpInput): Promise<QueryResult> => {
  const pool = new Pool({
    connectionString: process.env.connectionString,
  })

  const userQueryResult: QueryResult =  {
    success: true,
    error: null
  }

  const res = await pool.query(
    `INSERT INTO
      users
        (
          email,
          name,
          mobile_number,
          password
        )
      VALUES
        (
          '${parsedUserInput.email}',
          '${parsedUserInput.name}',
          '${parsedUserInput.mobileNumber}',
          '${parsedUserInput.password}'
        )`
  ).catch(error => {
    return error
  })

  if (res.code) {
    userQueryResult.success = false
    userQueryResult.error = res.code
  }

  return userQueryResult
}

export default create
