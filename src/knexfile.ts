// Update with your config settings.
import dotenv from 'dotenv'

dotenv.config()
const knexConfig = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      ssl: { rejectUnauthorized: false }
    }
  }
}

export default knexConfig
