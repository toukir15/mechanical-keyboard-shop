import express from 'express'
import router from './app/routes'
const app = express()
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

//Not Found
app.use(notFound)

export default app
