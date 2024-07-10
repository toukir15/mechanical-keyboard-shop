import express from 'express'
import router from './app/routes'
const app = express()
import cors from 'cors'

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
