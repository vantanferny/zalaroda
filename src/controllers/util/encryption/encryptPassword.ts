import bcrypt from 'bcrypt'

const encryptPassword = async (password: string): Promise<string> => {
  const saltRounds: number = 10
  const encryptedPassword: string = await new Promise((resolve) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      resolve(hash)
    })
  })

  return encryptedPassword
}

export default encryptPassword
