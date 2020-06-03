import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
//import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/hello', (req, res)=>{
    res.status(200).send("World");
})

export const start = async () => {
  try {
    //await connect()
    const port = 8080;
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
