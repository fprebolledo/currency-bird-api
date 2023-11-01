import express from 'express'
import cors from 'cors'
import paymentRouter from './routes/payments'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(paymentRouter)

try {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}
